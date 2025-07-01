function genPDF(data){
    var doc = new jsPDF({
    orientation: `portrait`,
    unit: `mm`,
    format: `a4`,
    encryption: {
    userPassword: data.vehiculo.placa,
    ownerPassword: "iVBORw0KGgoAAAANSUhEUgAAAFgAAAA",
    userPermissions: ["print"]}
});
let y=0;


// ============ FUNCIONES AUXILIARES ============
function addTextWithBox(text, x, y, width, height, fontSize = 8, isBold = false, padding = 1) {
    // Configurar estilo de fuente
    doc.setFontSize(fontSize);
    doc.setFont(`Arial`, isBold ? `bold` : `normal`);
    
    // Agregar texto
    doc.text(text, x + padding, y + padding + 2);
    
    // Dibujar rectángulo debajo
    doc.rect(x, y + padding, width, height);
}

function addSectionHeader(text, x, y) {
    doc.setFontSize(11);
    doc.setFont(`Arial`, `bold`);
    doc.text(text, x, y);
}

function addSectionData(text, x, y,font=10) {
    doc.setFontSize(font);
    doc.setFont(`Arial`, `normal`);
    doc.text(text, x, y);
}

function marcaDeAgua(){
    doc.setTextColor(100);
    doc.setFontSize(50);    
    doc.setFont("helvetica", "bold");

// Agrega el texto de marca de agua rotado en el centro
doc.saveGraphicsState(); // Guarda el estado actual

doc.setGState(new doc.GState({ opacity: 0.5 })); // Ajusta opacidad (si se soporta)

doc.text("Demostrativo", doc.internal.pageSize.getWidth() / 2, doc.internal.pageSize.getHeight() / 2, {
  angle: 45,
  align: "center"
});

doc.restoreGraphicsState();
doc.setTextColor(0);
}

marcaDeAgua();
// ============ ENCABEZADO ============
doc.setFontSize(12);
doc.setFont(`Arial`, `bold`);
doc.text(`FORMATO DE INGRESO`, 5, 8);
doc.rect(4, 3, 52, 8);
doc.text(`FECHA:${data.formato.fecha}`, 57, 8);
doc.rect(56, 3, 52, 8);
doc.text(`VERSION: ${data.formato.version}`, 109, 8);
doc.rect(108, 3, 52, 8);
doc.text(`CÓDIGO: ${data.formato.codigo}`, 161, 8);
doc.rect(160, 3, 45, 8);


doc.text(`N°:` + data.formato.numero.toString(), 141, 19);
doc.rect(140, 14, 65, 8); // Rectángulo para número

// Logo y datos del CDA
doc.addImage(data.encabezado.logocda, "JPEG", 15, 28, 35, 15);
doc.rect(90, 23, 115, 24); // Rectángulo grande para datos CDA

doc.setFontSize(11);
doc.text(data.encabezado.nombrecda.toUpperCase(),90,27)
doc.text(`NIT: ` + data.encabezado.nitcda, 90, 31);
doc.text(`TEL: ` + data.encabezado.telcda, 90, 35);
doc.text(data.encabezado.dircda.toUpperCase(), 90, 40);
doc.text(data.encabezado.ciudadcda.toUpperCase() + ` - ` + data.encabezado.deptocda.toUpperCase(), 90, 45);

// ============ INFORMACIÓN GENERAL ============
addSectionHeader(`A. INFORMACIÓN GENERAL`, 5, 68);

// Fecha
addSectionHeader(`1. FECHA`, 5, 78);
y=80;
addTextWithBox(`Fecha de Ingreso`, 5, y, 60, 8);
addSectionData(data.vehiculo.fecha,7,y+7);
// Datos del propietario
addSectionHeader(`2. DATOS DEL PROPIETARIO, TENEDOR O POSEEDOR DEL VEHÍCULO`, 65, 78);
addTextWithBox(`Nombre o Razón social`, 65, y, 80, 8);
addSectionData(data.propietario.nombre,67,y+7);
addTextWithBox(`Documento de identidad \nCC (${data.propietario.tp_doc!='NIT'?'X':' '}) NIT (${data.propietario.tp_doc=='NIT'?'X':' '}) No. ${data.propietario.documento}`, 145, y, 60, 8);
y=88;
addTextWithBox(`Dirección`, 5, y, 55, 8);
addSectionData(data.propietario.direccion,7,y+7);
addTextWithBox(`Teléfono fijo o Numero de Celular`, 60, y, 45, 8);
addSectionData(data.propietario.telefono,61,y+7);
addTextWithBox(`Ciudad`, 105, y, 50, 8);
addSectionData(data.propietario.ciudad,106,y+7);
addTextWithBox(`Departamento`, 155, y, 50, 8);
addSectionData(data.propietario.depto,156,y+7);
y+=8;
addTextWithBox(`Correo Electrónico`, 5, y, 200, 8);
addSectionData(data.propietario.correo,6,y+7);
y+=8;
addTextWithBox(``, 5, y, 200, 8);
y+=13;
// Datos del vehículo
addSectionHeader(`3. DATOS DEL VEHÍCULO`, 65, y);
y+=1
// Primera fila de datos del vehículo
addTextWithBox(`Placa`, 5, y, 40, 8);
addSectionData(data.vehiculo.placa,6,y+7);
addTextWithBox(`País`, 45, y, 25, 8);
addSectionData(data.vehiculo.pais,46,y+7);
addTextWithBox(`Servicio`, 70, y, 25, 8);
addSectionData(data.vehiculo.servicio,71,y+7);
addTextWithBox(`Clase`, 95, y, 25, 8);
addSectionData(data.vehiculo.clase,96,y+7);
addTextWithBox(`Marca`, 120, y, 40, 8);
addSectionData(data.vehiculo.marca,126,y+7);
addTextWithBox(`Línea`, 160, y, 45, 8);
addSectionData(data.vehiculo.linea,161,y+7);
y+=8;
// Segunda fila de datos del vehículo
addTextWithBox(`Modelo`, 5, y, 20, 8);
addSectionData(data.vehiculo.modelo,6,y+7);
addTextWithBox(`Número de licencia de tránsito`, 25, y, 37, 8);
addSectionData(data.vehiculo.nolicencia,26,y+7);
addTextWithBox(`Fecha de matrícula`, 62, y, 25, 8);
addSectionData(data.vehiculo.fechamatricula,63,y+7);
addTextWithBox(`Color`, 87, y, 40, 8);
addSectionData(data.vehiculo.color,88,y+7);
addTextWithBox(`Combustible / Propulsión`, 127, y, 33, 8);
addSectionData(data.vehiculo.combustible,128,y+7);
addTextWithBox(`VIN o Chasis`, 160, y, 45, 8);
addSectionData(data.vehiculo.vin,162,y+7);
y+=8;
// Tercera fila de datos del vehículo
addTextWithBox(`No de motor`, 5, y, 35, 8);
addSectionData(data.vehiculo.nomotor,6,y+7);
addTextWithBox(`Tipo motor`, 40, y, 24, 8);
addSectionData(data.vehiculo.tpmotor,41,y+7);
addTextWithBox(`Cilindraje (cm3) (si aplica)`, 64, y, 34, 8);
addSectionData(data.vehiculo.cilindraje,65,y+7);
addTextWithBox(`Kilometraje`, 98, y, 27, 8);
addSectionData(data.vehiculo.kms,99,y+7);
addTextWithBox(`Número de pasajeros (sin \nincluir conductor)`, 125, y, 31, 8);
addSectionData(data.vehiculo.nopasajeros,147,y+7);
addTextWithBox(`Blindaje \nSI (${data.vehiculo.blindado=='SI'?'X':' '}) NO (${data.vehiculo.blindado=='SI'?' ':'X'})`, 156, y, 22, 8);
addTextWithBox(`Enseñanza\nSI (${data.vehiculo.ense=='SI'?'X':''}) NO (${data.vehiculo.ense=='SI'?' ':'X'}) `, 178, y, 27, 8);
y+=8;
// Cuarta fila de datos del vehículo
addTextWithBox(`Potencia (si aplica)`, 5, y, 25, 8);
addSectionData(data.vehiculo.potencia,6,y+7);
addTextWithBox(`Tipo de Carrocería`, 30, y, 25, 8);
addSectionData(data.vehiculo.carroceria,31,y+7);
addTextWithBox(`Fecha vencimiento SOAT`, 55, y, 35, 8);
addSectionData(data.vehiculo.fechasoat,56,y+7);
//addTextWithBox(`(aaaa)-(mm)-(dd)`, 55, 136, 35, 5);
let gnvtxt = "";
if(data.vehiculo.gnv=="SI"){
    gnvtxt="Conversión GNV\nSI (X) NO (  ) N/A (  )";
}else if(data.vehiculo.gnv=="NO"){
    gnvtxt="Conversión GNV\nSI ( ) NO (X) N/A ( )";
}else{
    gnvtxt="Conversión GNV\nSI ( ) NO ( ) N/A (X)";
}

addTextWithBox(gnvtxt, 90, y, 45, 8);
//addTextWithBox(``, 90, 136, 45, 5);
addTextWithBox(`Fecha Vencimiento GNV`, 135, y, 55, 8);
addSectionData(data.vehiculo.fechasoat,136,y+7);
//addTextWithBox(`(aaaa)-(mm)-(dd)`, 135, 136, 55, 5);
addTextWithBox(`Vez\n${data.formato.vez==`1`?`1ra vez`:`2da vez`}`, 190, y, 15, 8);
y+=8;
addTextWithBox(`Correo Electrónico`, 5, y, 200, 8);
y+=13;
// ============ CONDICIONES ============
addSectionHeader(`B. CONDICIONES`, 5, y);
y+=4;
addSectionHeader(`1. CRITERIOS`, 5, y);
y+=8;
// Encabezados de criterios
doc.setFontSize(8);
doc.text(`CRITERIO`, 35, y);
doc.text(`ESTADO`, 89, y);
doc.text(`CRITERIO`, 135, y);
doc.text(`ESTADO`, 189, y);
y-=3;
// Rectángulos para encabezados de criterios
doc.rect(5, y, 80, 5);
doc.rect(85, y, 20, 5);
doc.rect(105, y, 80, 5);
doc.rect(185, y, 20, 5);
y+=5;
// Lista de criterios
const criteriosKeys = Object.keys(data.criterios);
const mitad = Math.ceil(criteriosKeys.length / 2);
let temp;
for (let i = 0; i < mitad; i++) {
    let y2 = y + i * 5;
    let ytxt = y+4 + i * 5;
    temp=y2;
    const crit1 = data.criterios[i];
    doc.rect(5, y2, 80, 5);
    doc.rect(85, y2, 20, 5);
    doc.text(crit1.criterio, 6, ytxt);
    doc.text(crit1.concepto, 93, ytxt);

    const crit2 = data.criterios[i + mitad];
    if (crit2) {
        doc.rect(105, y2, 80, 5);
        doc.rect(185, y2, 20, 5);
        doc.text(crit2.criterio, 106, ytxt);
        doc.text(crit2.concepto, 193, ytxt);
    }
}

// ============ PRESIÓN DE LLANTAS ============
y = temp + mitad + 7;
addSectionHeader(`2. PRESIÓN DE LAS LLANTAS`, 6, y);

y += 3;
doc.setFont(`Arial`, `normal`);
doc.setFontSize(8);

// Encabezados de presión de llantas
doc.text(`UNIDAD:PSI`, 6, y+3);
doc.text(`Eje 1`, 44, y+3);
doc.text(`Eje 2`, 72, y+3);
doc.text(`Eje 3`, 100, y+3);
doc.text(`Eje 4`, 128, y+3);
doc.text(`Eje 5`, 156, y+3);
doc.text(`Repuesto`, 182, y+3);

// Rectángulos para presión de llantas
for(let j = 0; j < 7; j++) {
    doc.rect(5 + j * 28, y - 1, 28, 5);
    doc.rect(5 + j * 28, y + 4, 28, 5);
    doc.rect(5 + j * 28, y + 9, 28, 5);
    
}



// Etiquetas izquierda/derecha
doc.text(`IZQUIERDA`, 6, y + 8);
doc.text(`DERECHA`, 6, y + 13);
tempy=y+8;
tempx=44;
up=true;
paso=0;
Object.entries(data.vehiculo.presiones).forEach(([llanta, presion]) => {
    
    if(up){
        tempy=y+8;
        up=false;
    }else{
        tempy=y+13;
        up=true;
    }
    if(paso==2){
        paso=0;
        if(tempx>=66){
          tempx+=14;    
        }else{
          tempx+=22;  
        }
    }
    paso+=1;
    addSectionData(`${presion}`,tempx,tempy,8);
});
// Líneas divisorias
doc.setLineWidth(0.4);
doc.line(75, y + 4, 75, y + 14);
doc.line(103, y + 4, 103, y + 14);
doc.line(131, y + 4, 131, y + 14);
doc.line(159, y + 4, 159, y + 14);

// ============ OBSERVACIONES ============
y += 19;
addSectionHeader(`3. OBSERVACIONES`, 6, y);
y += 3;
doc.rect(5, y, 200, 40);
obser="";
addSectionData(data.vehiculo.observaciones, 7, y+6,8);

// ============ PÁGINAS ADICIONALES ============
doc.addPage();
marcaDeAgua();
y = 8;

// Función para agregar texto con formato de cláusulas
function addClauses(title, clauses, startY) {
    let currentY = startY;
    const fontSize = 7;
    const lineHeight = 2.8;
    const marginX = 10;
    const maxWidth = 190;

    doc.setFont(`Arial`, `bold`);
    doc.setFontSize(11);
    doc.text(title, 6, currentY);
    currentY += 3;

    doc.setFontSize(fontSize);
    doc.setFont("Arial", "normal");

    clauses.forEach((clausula, index) => {
        const texto = `${index + 1}. ${clausula}`;
        const lineas = doc.splitTextToSize(texto, maxWidth);

        if (currentY + lineas.length * lineHeight > 287) {
            doc.addPage();
            marcaDeAgua();
            currentY = marginY;
        }

        doc.text(lineas, marginX, currentY);
        currentY += lineas.length * lineHeight;
    });

    return currentY;
}
if(data.vehiculo.autorizacion){
    data.privacidad[0] = data.privacidad[0].replace('SI______','SI__X___');    
}else{
    data.privacidad[0] = data.privacidad[0].replace('NO______','NO__X___');
}

// Agregar secciones de texto
y = addClauses(`3. CONDICIONES DE LA INSPECCIÓN`, data.contrato, y);
y = addClauses(`4. AVISO DE PRIVACIDAD`, data.aviso, y + 3);
y = addClauses(`5. AUTORIZACIÓN`, data.privacidad, y + 3);

// Firmas
y += 3;
doc.text(`Firma de aceptación de los términos y condiciones de la aceptación del servicio:`, 6, y);
y += 3;
doc.text(`Declaro que he leído y se me informo sobre las condiciones del servicio, la preparación que debe tener mi vehículo para ingresar a la línea de inspección`, 6, y);
y += 15;

doc.line(14, y, 57, y);
doc.text(`Firma: `, 6, y);
doc.line(114, y, 157, y);
doc.text(`Firma: `, 102, y);
y += 3;

doc.text(`Nombre y apellidos:`, 6, y);
doc.text(`Recepcionista:`, 102, y);

if(data.fotoEvidencia){
    doc.addPage();
    marcaDeAgua();
    addSectionHeader(`6 EVIDENCIA FOTOGRAFICA`, 5, 9);
    
}


// Guardar el documento
doc.save("formato_ingreso_ordenado.pdf");

}