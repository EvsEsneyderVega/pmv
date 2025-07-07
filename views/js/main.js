const { jsPDF } = window.jspdf;

// objeto de datos
const data = {
    encabezado: {
        nombrecda: 'cda el chiringuito s.a.s',
        telcda: '321321321321',
        nitcda: '900123123-1',
        dircda: 'calle 1 No 123-123',
        ciudadcda: 'Bogotá',
        deptocda: 'Cundinamarca',
        logocda: ''

    },
    formato: {
        fecha: '2025-06-22',
        version: '2',
        codigo: 'GT-F-01',
        numero: 12345,
        vez: '1'
    },
    vehiculo: {
        fecha: '2025-06-22 07:05:02',
        placa: 'ABC123',
        pais: 'COLOMBIA',
        servicio: 'PARTICULAR',
        clase: 'AUTOMOVIL',
        marca: 'RENAULT',
        linea: 'SANDERO',
        modelo: '2002',
        nolicencia: '100011001',
        fechamatricula: '2001-04-03',
        color: 'NEGRO',
        combustible: 'GASOLINA',
        vin: '123456',
        nomotor: '123456',
        tpmotor: 'OTTO',
        cilindraje: '1300',
        kms: '25000',
        nopasajeros: '4',
        blindado: 'SI',
        ense: 'SI',
        potencia: '***',
        carroceria: 'SEDAN',
        fechasoat: '2026-08-03',
        conversiongnv: '',
        fechagnv: '2025-12-03',
        gnv: 'SI',
        fotoEvidencia: [],
        presiones: {
            eje1I: '',
            eje1D: '',
            eje2I1: '',
            eje2I2: '',
            eje2D1: '',
            eje2D2: '',
            eje3I1: '',
            eje3I2: '',
            eje3D1: '',
            eje3D2: '',
            eje4I1: '',
            eje4I2: '',
            eje4D1: '',
            eje4D2: '',
            eje5I1: '',
            eje5I2: '',
            eje5D1: '',
            eje5D2: '',
            repI: '',
            repD: '',
        },

        observaciones: [],
        autorizacion: false,
        recepcionista: 'pepito perez',
        firmarecepcionista: '',
    },
    propietario: {
        nombre: 'Juan Perez',
        documento: '123456789',
        direccion: 'CALLE 1 #22 33',
        telefono: '3000000000',
        pais: '',
        departamento: '',
        ciudad: 'BOGOTÁ',
        depto: 'CUNDINAMARCA',
        tp_doc: 'NIT',
        correo: 'ALGO@TEST.COM.CO',
        firma: ''

    },
    criterios: [
        { 'criterio': 'Vehículo Completamente descargado.   ', 'concepto': 'C' },
        { 'criterio': 'Llanta de repuesto sin protector y que permita el acceso. ', 'concepto': 'C' },
        { 'criterio': 'Sin dejar dinero, radio, u otros elementos extraíbles.  ', 'concepto': 'C' },
        { 'criterio': 'Filtro de aire desatornillado ', 'concepto': 'C' },
        { 'criterio': 'Alarma desactivada  ', 'concepto': 'C' },
        { 'criterio': 'Batería asequible (sin cubre batería). ', 'concepto': 'C' },
        { 'criterio': 'En buen estado de limpieza  ', 'concepto': 'C' },
        { 'criterio': 'Sin cadena o candado en cabinas basculantes cuando aplique ', 'concepto': 'N/A' },
        { 'criterio': 'Sin tapacubos o copas plásticas  ', 'concepto': 'C' },
        { 'criterio': 'Cinturones de seguridad libres y visibles. ', 'concepto': 'C' },
        { 'criterio': 'Enciende alguna luz del vehículo. ', 'concepto': 'C' },
        { 'criterio': 'Deposito del líquido de frenos visible ', 'concepto': 'C' },
        { 'criterio': 'Combustible suficiente', 'concepto': 'C' }
    ],
    contrato: [
        'El servicio de revisión técnico - mecánica y de emisiones contaminantes que se presta en el Centro de Diagnóstico Automotor (CDA PUENTE ARANDA 12-44 S.A.S.), es el contemplado en los artículos 28, 50 y 51 de la ley 769 de 2002 y sus modificaciones, reglamentada por la Resolución 3768 de 2013, y resolución 20203040011355:2020.',
        'El tiempo estimado de prueba, el cual es de 50 minutos, puede variar teniendo en cuenta el flujo vehicular, lo que ocasionará un tiempo adicional. Recuerde que es obligatoria la presencia física del vehículo en el CDA, la documentación y vigencia de la misma.',
        'Se realizará a su vehículo las siguientes pruebas e inspecciones: para automóviles: emisiones contaminantes, frenos, luces, inspección sensorial, alineación, suspensión, presión sonora y si el vehículo es taxi se le aplicara la prueba de taxímetro; El certificado se le expedirá únicamente a los vehículos que cumplan con los requisitos establecidos por la resolución 3768 de 2013, la NTC 5375 y las demás que disponga la ley.',
        'Al realizar la revisión Técnico-Mecánica y de emisiones contaminantes, su vehículo será sometido a pruebas con el grado de exigencia estipulado por el Ministerio de Transporte y el Ministerio de Ambiente, por lo tanto, el CDA, no se hace responsable por daños ocasionados en dicho proceso.',
        'El cliente no debe ingresar a las áreas de inspección: para su espera está dispuesta una sala que permite de forma directa evidenciar su vehículo en la línea de revisión. El CDA no permite la interacción directa con el personal de la línea de revisión. Le solicitamos abstenerse de cualquier conversación con los inspectores, si es necesario comuníquese con el Director Técnico (Ingeniero).',
        'Apreciado Usuario; El pago de la Revisión Técnico-Mecánica y de emisiones contaminantes no está sujeto a la entrega del CERTIFICADO “Si al verificar el resultado total de las pruebas, en las revisiones técnico-mecánica y de emisiones contaminantes, el vehículo automotor es reprobado de acuerdo con los criterios señalados para el efecto, el Centro de Diagnóstico Automotor o línea móvil, deberá entregar copia del Formato Uniforme de Resultados de las revisiones técnico-mecánica y de emisiones contaminantes al propietario, poseedor o tenedor del vehículo automotor, quien deberá efectuar las reparaciones pertinentes y subsanar los aspectos defectuosos dentro de los quince (15) días calendario contados a partir de la fecha en que fue reprobado. Una vez efectuadas las reparaciones el propietario, poseedor o tenedor del vehículo automotor podrá volver por una sola vez sin costo al mismo Centro de Diagnóstico Automotor o línea móvil, para someter el vehículo a la revisión de los aspectos r probados en la visita inicial. En la segunda visita al Centro de Diagnóstico Automotor CDA PUENTE ARANDA 12-44 S.A.S., el vehículo, en todos los casos, será objeto de una revisión sensorial completa para verificar que las condiciones generales del vehículo se mantienen, y se procederá a hacer una revisión gratuita de los aspectos reprobados en la visita inicial mediante revisión visual o revisión mecanizada, según corresponda Cuando de la revisión visual se compruebe que el vehículo pudo haber sufrido alguna alteración, este será sometido a una revisión total como si acudiera por primera vez y esta generará el respectivo cobro.”. Art 28 de la resolución 3768 de 2013, Nota: tenga en cuenta que los horarios del CDA se encuentran definidos de la siguiente manera: lunes a sábado hay apertura de lunes a viernes de 6:30 am a 6:00 pm, sábados de 7:00 am a 4:00 pm, domingos y festivos de 7:00 am a 12:00 pm.',
        'El vehículo debe venir preparado para la revisión: como mínimo debe estar sin copas (tapacubos) en los rines, los dispositivos de seguridad desactivados y la correcta presión del aire de las llantas, de lo contrario se le informara al cliente para que ajuste el vehículo a las condiciones exigidas.',
        'Una vez realizada la revisión técnico-mecánica y de emisiones contaminantes a su vehículo, el CDA NO REALIZARÁ DEVOLUCIONES DE DINERO.',
        'Por favor, absténgase de dar propinas, obsequios o cualquier tipo de remuneración por la certificación de su vehículo; el hacerlo pone en riesgo la estabilidad laboral del empleado, ya que el proceso de inspección debe ser imparcial.',
        'Los resultados de la inspección son confidenciales y están protegidos.',
        'El personal que realiza que participa en las actividades de inspección cuenta con el conocimiento y la competencia de acuerdo a los requisitos legales exigidos',
        'El CDA no responderá por objetos dejados en los vehículos, que no sean reportados en el control de entrada.',
        'Se solicita revisar dentro del CDA su vehículo, una vez le sea entregado, así como sus documentos. Después de retirado, el CDA no atenderá ninguna apelación',
        'Si su vehículo no cumple con la profundidad de labrado de las llantas este será rechazado por este ítem y se realiza la prueba de eficacia de frenado, sin embargo, cuando ingrese por segunda vez se realizará nuevamente la prueba de eficacia de frenado y si esta no aprueba usted será rechazado nuevamente y tendrá que pagar nuevamente la revisión técnico mecánica total.',
        'El CDA cuenta con una póliza civil profesional la cual ampara la responsabilidad civil profesional resultante de la prestación deficiente del servicio por parte del CDA',
        'Recuerde que el CDA cuenta con un procedimiento de seguridad de la información que respalda la información resultante',
        'El CDA PUENTE ARANDA 12-44 S.A.S., contamos con acreditación ONAC, vigente a la fecha, con código de acreditación 21-CDA-097 bajo la norma ISO/IEC 17020:2012, para vehículos livianos, otorgada el 2022-07-05, con vencimiento el 2025-07-04 Este puede ser confirmado en la página de ONAC www.onac.org.co.',
        'Si por ley o compromisos contractuales se deba divulgar su información confidencial, usted será notificado salvo que lo prohíba la ley. La información obtenida por fuentes distintas al cliente será tratada de manera confidencial.',
        'En el aviso de privacidad se da a conocer con antelación la información que el CDA tiene intensión hacer pública.',
        'El Certificado de RTM EYC es vigente por un (1) año, y ahora es de manera digital usted podrá consultarlo por la página de RUNT ciudadanos.',
        'Señor usuario recuerde que las revisiones preventivas ni la venta de SOAT favorecen, ni desfavorecen el resultado de la revisión técnico-mecánica',
        'Señor usuario recuerde que las tarifas del CDA se encuentran reguladas por la resolución 3318:2015 y 20213040063835 de 2021, la cual se modifica el artículo 1o de la Resolución 3318 de 2015'
    ],
    aviso: ['El CDA actuando en calidad de responsable del tratamiento de sus datos personales, informa que los datos personales suministrados por Usted con ocasión de su acceso a los servicios ofrecidos serán incluidos en distintas bases de datos y serán utilizados para las siguientes finalidades: a) Transferencia al RUNT de los resultados de la revisión, sea esta aprobada o rechazada. b) Transferencia a la Autoridad ambiental de la región – SECRETARÍA DE AMBIENTE, de la información de los propietarios, poseedor o tenedor del vehículo, información del vehículo y de los valores del análisis de emisiones contaminantes. c) Transferencia al organismo de transito del municipio, de las inconsistencia encontradas entre la información documental y la presencia física del vehículo, d) Transferencia a la Superintendencia de puertos y transporte, de la información de los propietarios, poseedor o tenedor del vehículo, información del vehículo y de todos los resultados de la inspección, e) Sistema de control y vigilancia (Sicov) en nuestro caso CI2 recuerde que todas las actividades de inspección realizadas incluyendo resultados son monitoreados (filmados) y usted se encuentra filmado por esta entidad y son enviados a esta entidad, f) entrega de los resultados de las pruebas al Organismo Nacional de Acreditación de Colombia ONAC cuando este lo solicite. Para cualquier información sobre este aviso de privacidad, de la ley aplicable o para el ejercicio de cualquiera de los derechos derivados de la protección de sus datos personales, incluyendo sin limitación sus derechos de acceso, rectificación, y supresión (siempre que no exista un mandato legal o contractual que faculte al CDA para continuar con el tratamiento directamente), usted se podrá contactar en Soacha a los teléfonos 3132005852'],
    privacidad: ['De conformidad con lo previsto en la Ley Estatutaria 1581 de 2012 y el Decreto 1377 de 2013, el que firma autoriza a (CDA PUENTE ARANDA 12-44 S.A.S.) a dar tratamiento de los datos personales que sean pertinentes y adecuados para la realización y el registro de la RTMyEC de acuerdo con la normatividad vigente a los CDA: a) Envío de avisos, propaganda o publicidad sobre nuestros servicios. b) Notificación de vencimiento de la RTMyEC. c) al uso de la información personal recolectada para finalidades iguales, análogas o compatibles con aquellas para las cuales se recogieron los datos personales inicialmente. d) Desarrollo de propuestas comerciales de servicios ofrecidos por CDA a sus clientes. e) servicio al cliente y realizar estudios de mercadeo. Autorizo que el Centro de Diagnóstico Automotor, utilice la información consignada en el presente documento con fines comerciales, cumpliendo con lo establecido en la ley 1581 de 2012 y el Decreto Reglamentario 1377 de 2013 SI______NO______'],


};
let doc;

// ============ FUNCIONES AUXILIARES ============
/**
 * 
 * @param {String} text 
 * @param {int} x 
 * @param {int} y 
 * @param {int} width 
 * @param {int} height 
 * @param {int} fontSize 
 * @param {boolean} isBold 
 * @param {int} padding 
 */
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

function addSectionData(text, x, y, font = 10) {
    doc.setFontSize(font);
    doc.setFont(`Arial`, `normal`);
    doc.text(text, x, y);
}

function marcaDeAgua(doc) {
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

function genPDF(data) {
    doc = new jsPDF({
        orientation: `portrait`,
        unit: `mm`,
        format: `a4`,
        encryption: {
            userPassword: data.vehiculo.placa,
            ownerPassword: "iVBORw0KGgoAAAANSUhEUgAAAFgAAAA",
            userPermissions: ["print"]
        }
    });
    let y = 0;
    marcaDeAgua(doc);
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
    doc.text(data.encabezado.nombrecda.toUpperCase(), 90, 27)
    doc.text(`NIT: ` + data.encabezado.nitcda, 90, 31);
    doc.text(`TEL: ` + data.encabezado.telcda, 90, 35);
    doc.text(data.encabezado.dircda.toUpperCase(), 90, 40);
    doc.text(data.encabezado.ciudadcda.toUpperCase() + ` - ` + data.encabezado.deptocda.toUpperCase(), 90, 45);

    // ============ INFORMACIÓN GENERAL ============
    addSectionHeader(`A. INFORMACIÓN GENERAL`, 5, 68);

    // Fecha
    addSectionHeader(`1. FECHA`, 5, 78);
    y = 80;
    addTextWithBox(`Fecha de Ingreso`, 5, y, 60, 8);
    addSectionData(data.vehiculo.fecha, 7, y + 7);
    // Datos del propietario
    addSectionHeader(`2. DATOS DEL PROPIETARIO, TENEDOR O POSEEDOR DEL VEHÍCULO`, 65, 78);
    addTextWithBox(`Nombre o Razón social`, 65, y, 80, 8);
    addSectionData(data.propietario.nombre, 67, y + 7);
    addTextWithBox(`Documento de identidad \nCC (${data.propietario.tp_doc != 'NIT' ? 'X' : ' '}) NIT (${data.propietario.tp_doc == 'NIT' ? 'X' : ' '}) No. ${data.propietario.documento}`, 145, y, 60, 8);
    y = 88;
    addTextWithBox(`Dirección`, 5, y, 55, 8);
    addSectionData(data.propietario.direccion, 7, y + 7);
    addTextWithBox(`Teléfono fijo o Numero de Celular`, 60, y, 45, 8);
    addSectionData(data.propietario.telefono, 61, y + 7);
    addTextWithBox(`Ciudad`, 105, y, 50, 8);
    addSectionData(data.propietario.ciudad, 106, y + 7);
    addTextWithBox(`Departamento`, 155, y, 50, 8);
    addSectionData(data.propietario.depto, 156, y + 7);
    y += 8;
    addTextWithBox(`Correo Electrónico`, 5, y, 200, 8);
    addSectionData(data.propietario.correo, 6, y + 7);
    y += 8;
    addTextWithBox(``, 5, y, 200, 8);
    y += 13;
    // Datos del vehículo
    addSectionHeader(`3. DATOS DEL VEHÍCULO`, 65, y);
    y += 1
    // Primera fila de datos del vehículo
    addTextWithBox(`Placa`, 5, y, 40, 8);
    addSectionData(data.vehiculo.placa, 6, y + 7);
    addTextWithBox(`País`, 45, y, 25, 8);
    addSectionData(data.vehiculo.pais, 46, y + 7);
    addTextWithBox(`Servicio`, 70, y, 25, 8);
    addSectionData(data.vehiculo.servicio, 71, y + 7);
    addTextWithBox(`Clase`, 95, y, 25, 8);
    addSectionData(data.vehiculo.clase, 96, y + 7);
    addTextWithBox(`Marca`, 120, y, 40, 8);
    addSectionData(data.vehiculo.marca, 126, y + 7);
    addTextWithBox(`Línea`, 160, y, 45, 8);
    addSectionData(data.vehiculo.linea, 161, y + 7);
    y += 8;
    // Segunda fila de datos del vehículo
    addTextWithBox(`Modelo`, 5, y, 20, 8);
    addSectionData(data.vehiculo.modelo, 6, y + 7);
    addTextWithBox(`Número de licencia de tránsito`, 25, y, 37, 8);
    addSectionData(data.vehiculo.nolicencia, 26, y + 7);
    addTextWithBox(`Fecha de matrícula`, 62, y, 25, 8);
    addSectionData(data.vehiculo.fechamatricula, 63, y + 7);
    addTextWithBox(`Color`, 87, y, 40, 8);
    addSectionData(data.vehiculo.color, 88, y + 7);
    addTextWithBox(`Combustible / Propulsión`, 127, y, 33, 8);
    addSectionData(data.vehiculo.combustible, 128, y + 7);
    addTextWithBox(`VIN o Chasis`, 160, y, 45, 8);
    addSectionData(data.vehiculo.vin, 162, y + 7);
    y += 8;
    // Tercera fila de datos del vehículo
    addTextWithBox(`No de motor`, 5, y, 35, 8);
    addSectionData(data.vehiculo.nomotor, 6, y + 7);
    addTextWithBox(`Tipo motor`, 40, y, 24, 8);
    addSectionData(data.vehiculo.tpmotor, 41, y + 7);
    addTextWithBox(`Cilindraje (cm3) (si aplica)`, 64, y, 34, 8);
    addSectionData(data.vehiculo.cilindraje, 65, y + 7);
    addTextWithBox(`Kilometraje`, 98, y, 27, 8);
    addSectionData(data.vehiculo.kms, 99, y + 7);
    addTextWithBox(`Número de pasajeros (sin \nincluir conductor)`, 125, y, 31, 8);
    addSectionData(data.vehiculo.nopasajeros, 147, y + 7);
    addTextWithBox(`Blindaje \nSI (${data.vehiculo.blindado == 'SI' ? 'X' : ' '}) NO (${data.vehiculo.blindado == 'SI' ? ' ' : 'X'})`, 156, y, 22, 8);
    addTextWithBox(`Enseñanza\nSI (${data.vehiculo.ense == 'SI' ? 'X' : ''}) NO (${data.vehiculo.ense == 'SI' ? ' ' : 'X'}) `, 178, y, 27, 8);
    y += 8;
    // Cuarta fila de datos del vehículo
    addTextWithBox(`Potencia (si aplica)`, 5, y, 25, 8);
    addSectionData(data.vehiculo.potencia, 6, y + 7);
    addTextWithBox(`Tipo de Carrocería`, 30, y, 25, 8);
    addSectionData(data.vehiculo.carroceria, 31, y + 7);
    addTextWithBox(`Fecha vencimiento SOAT`, 55, y, 35, 8);
    addSectionData(data.vehiculo.fechasoat, 56, y + 7);
    //addTextWithBox(`(aaaa)-(mm)-(dd)`, 55, 136, 35, 5);
    let gnvtxt = "";
    if (data.vehiculo.gnv == "SI") {
        gnvtxt = "Conversión GNV\nSI (X) NO (  ) N/A (  )";
        addSectionData(data.vehiculo.fechagnv, 136, y + 7);
    } else if (data.vehiculo.gnv == "NO") {
        gnvtxt = "Conversión GNV\nSI ( ) NO (X) N/A ( )";
        addSectionData('', 136, y + 7);
    } else {
        gnvtxt = "Conversión GNV\nSI ( ) NO ( ) N/A (X)";
        addSectionData('', 136, y + 7);
    }

    addTextWithBox(gnvtxt, 90, y, 45, 8);
    //addTextWithBox(``, 90, 136, 45, 5);
    addTextWithBox(`Fecha Vencimiento GNV`, 135, y, 55, 8);
    
    //addTextWithBox(`(aaaa)-(mm)-(dd)`, 135, 136, 55, 5);
    addTextWithBox(`Vez\n${data.formato.vez == `1` ? `1ra vez` : `2da vez`}`, 190, y, 15, 8);
    y += 8;
    addTextWithBox(``, 5, y, 200, 8);
    y += 13;
    // ============ CONDICIONES ============
    addSectionHeader(`B. CONDICIONES`, 5, y);
    y += 4;
    addSectionHeader(`1. CRITERIOS`, 5, y);
    y += 8;
    // Encabezados de criterios
    doc.setFontSize(8);
    doc.text(`CRITERIO`, 35, y);
    doc.text(`ESTADO`, 89, y);
    doc.text(`CRITERIO`, 135, y);
    doc.text(`ESTADO`, 189, y);
    y -= 3;
    // Rectángulos para encabezados de criterios
    doc.rect(5, y, 80, 5);
    doc.rect(85, y, 20, 5);
    doc.rect(105, y, 80, 5);
    doc.rect(185, y, 20, 5);
    y += 5;
    // Lista de criterios
    const criteriosKeys = Object.keys(data.criterios);
    const mitad = Math.ceil(criteriosKeys.length / 2);
    let temp;
    for (let i = 0; i < mitad; i++) {
        let y2 = y + i * 5;
        let ytxt = y + 4 + i * 5;
        temp = y2;
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
    doc.text(`UNIDAD:PSI`, 6, y + 3);
    doc.text(`Eje 1`, 44, y + 3);
    doc.text(`Eje 2`, 72, y + 3);
    doc.text(`Eje 3`, 100, y + 3);
    doc.text(`Eje 4`, 128, y + 3);
    doc.text(`Eje 5`, 156, y + 3);
    doc.text(`Repuesto`, 182, y + 3);

    // Rectángulos para presión de llantas
    for (let j = 0; j < 7; j++) {
        doc.rect(5 + j * 28, y - 1, 28, 5);
        doc.rect(5 + j * 28, y + 4, 28, 5);
        doc.rect(5 + j * 28, y + 9, 28, 5);

    }



    // Etiquetas izquierda/derecha
    doc.text(`IZQUIERDA`, 6, y + 8);
    doc.text(`DERECHA`, 6, y + 13);
    tempy = y + 8;
    tempx = 44;
    up = true;
    paso = 0;
    Object.entries(data.vehiculo.presiones).forEach(([llanta, presion]) => {

        if (up) {
            tempy = y + 8;
            up = false;
        } else {
            tempy = y + 13;
            up = true;
        }
        if (paso == 2) {
            paso = 0;
            if (tempx >= 66) {
                tempx += 14;
            } else {
                tempx += 22;
            }
        }
        paso += 1;
        addSectionData(`${presion}`, tempx, tempy, 8);
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
    obser = "";
    addSectionData(data.vehiculo.observaciones, 7, y + 6, 8);

    // ============ PÁGINAS ADICIONALES ============
    doc.addPage();
    marcaDeAgua(doc);
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
                marcaDeAgua(doc);
                currentY = marginY;
            }

            doc.text(lineas, marginX, currentY);
            currentY += lineas.length * lineHeight;
        });

        return currentY;
    }
    if (data.vehiculo.autorizacion) {
        data.privacidad[0] = data.privacidad[0].replace('SI______', 'SI__X___');
    } else {
        data.privacidad[0] = data.privacidad[0].replace('NO______', 'NO__X___');
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
    doc.addImage(data.propietario.firma, 16, y - 14, 24, 14);
    doc.line(114, y, 157, y);
    doc.text(`Firma: `, 102, y);
    y += 3;

    doc.text(`Nombre y apellidos:`, 6, y);
    doc.text(`Recepcionista:`, 102, y);

    if (data.vehiculo.fotoEvidencia) {
        doc.addPage();
        y = 15;
        marcaDeAgua(doc);
        addSectionHeader(`6 EVIDENCIA FOTOGRAFICA`, 5, 9);
        console.log(data.vehiculo.fotoEvidencia);
        for (let i = 0; i < data.vehiculo.fotoEvidencia.length; i++) {

            doc.addImage(data.vehiculo.fotoEvidencia[i], "JPEG", 15, y + 55 * i, 90, 50);
        }

    }


    // Guardar el documento
    doc.save("formato_ingreso_ordenado.pdf");

}

function validateSection(section, comparacion = "@", comparacion2 = "@") {
let salida=true;
    for (let i = 0; i < section.length; i++) {
        
        let input = document.getElementById(section[i]);
        let dato = input.value.trim();
        let contenedor = $('#'+section[i]).closest('.form-holder');

        // Eliminar mensajes de error previos dentro del contenedor
        contenedor.find('.error-label').remove();


         // Eliminar mensaje de error previo si existe
        let errorLabel = document.querySelector(`#${section[i]} + .error-label`);
        if (errorLabel) {
            errorLabel.remove();
        }



        if (comparacion == section[i]) {

            if (dato == comparacion2) {
                i += 2;
                dato = document.getElementById(section[i]).value.trim();
            }

        }

        if (dato === "") {
             let label = document.createElement("p");
            label.classList.add("error-label");
            label.style.color= "#ffffff";
            label.style.textShadow ="0 0 5px red";
            label.style.fontSize = "12px";
            label.innerText = "Este campo es obligatorio";
            $(contenedor).append(label);


            input.classList.add("input-error-placeholder");
            salida = false
        }
    }

    if(!salida){
        Swal.fire({
                title: 'Datos incompletos',
                text: 'Por favor, complete la información antes de continuar.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
    }

    return salida;

}

const section1 = ['tpdocumento', 'documento', 'nombre', 'telefono', 'paispersona', 'deptoPropietario', 'ciudadProp', 'direccion', 'correo'];
const section2 = ['placa', 'vin', 'paisvehicl', 'servicioveh', 'marca', 'linea', 'modelo', 'nolicencia', 'fechamatricula', 'color', 'combustible'];
const section3 = ['nomotor', 'tpmotor', 'cilindraje', 'kms', 'nopasajeros', 'blindado', 'ense', 'potencia', 'carroceria', 'fechasoat', 'gnv', 'fechagnv', 'vez'];


// configuracion steper wizard


$(function () {
    $("#form-total").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: false,
        autoFocus: true,
        transitionEffectSpeed: 500,
        titleTemplate: '<div class="title">#title#</div>',
        labels: {
            previous: 'ANTERIOR',
            next: 'SIGUIENTE',
            finish: 'ENVIAR',
            current: ''
        },
        onStepChanging: function (event, currentIndex, newIndex) {
            
            if(currentIndex==1){  
                if (!validateSection(section1)){
                    return;
                }
            }
            if(currentIndex==2){
                if (!validateSection(section2)){
                    return;
                }
            }

            if(currentIndex==3){
                if (!validateSection(section3,"gnv","N/A")){
                    return;
                }
            }
             



            setTimeout(() => {
                //console.log("Han pasado 2 segundos");

                if ($('#signature-pad').is(':visible')) {
                    // console.log('inicializado el signpad');
                    inicializarSignPad();
                }
                if ($('#video').is(':visible')) {
                    initCam();
                }
                if ($('#firmasection').is(':visible')) {
                    detenerCamara();
                }

            }, 2000);
            

            return true;
        },
        onFinished: function (event, currentIndex) {
            detenerCamara();
            //propietario
            data.propietario.tp_doc = document.getElementById("tpdocumento").value;
            data.propietario.documento = document.getElementById("documento").value;
            data.propietario.nombre = document.getElementById("nombre").value;
            data.propietario.telefono = document.getElementById("telefono").value;
            data.propietario.pais = document.getElementById("paispersona").value;
            data.propietario.departamento = document.getElementById("deptoPropietario").value;
            data.propietario.ciudad = document.getElementById("ciudadProp").value;
            data.propietario.direccion = document.getElementById("direccion").value;
            data.propietario.correo = document.getElementById("correo").value;
            const dataURL = signaturePad.toDataURL();
            data.propietario.firma = dataURL

            //vehiculo
            data.vehiculo.fecha = new Date().toISOString().slice(0, 19).replace('T', ' ');
            data.vehiculo.placa = document.getElementById("placa").value;
            data.vehiculo.vin = document.getElementById("vin").value;
            data.vehiculo.pais = document.getElementById("paisvehicl").value;
            data.vehiculo.servicio = document.getElementById("servicioveh").value;
            data.vehiculo.marca = document.getElementById("marca").value;
            data.vehiculo.linea = document.getElementById("linea").value;
            data.vehiculo.modelo = document.getElementById("modelo").value;
            data.vehiculo.nolicencia = document.getElementById("nolicencia").value;
            data.vehiculo.color = document.getElementById("color").value;
            data.vehiculo.combustible = document.getElementById("combustible").value;
            data.vehiculo.nomotor = document.getElementById("nomotor").value;
            data.vehiculo.tpmotor = document.getElementById("tpmotor").value;
            data.vehiculo.cilindraje = document.getElementById("cilindraje").value;
            data.vehiculo.kms = document.getElementById("kms").value;
            data.vehiculo.nopasajeros = document.getElementById("nopasajeros").value;
            data.vehiculo.blindado = document.getElementById("blindado").checked ? "SI" : "NO";
            data.vehiculo.ense = document.getElementById("ense").checked ? "SI" : "NO";
            data.vehiculo.potencia = document.getElementById("potencia").value;
            data.vehiculo.carroceria = document.getElementById("carroceria").value;
            data.vehiculo.fechamatricula = document.getElementById("fechamatricula").value;
            data.vehiculo.gnv = document.getElementById("gnv").value;
            data.vehiculo.fechagnv = document.getElementById("fechagnv").value;
            data.vehiculo.vez = document.getElementById("vez").value;
            data.vehiculo.fechasoat = document.getElementById("fechasoat").value;
            data.vehiculo.fotoEvidencia = fotos
            data.vehiculo.observaciones = document.getElementById("observaciones").value;




            // Si quieres enviar el formulario automáticamente:
            genPDF(data);

        }
    });
    $("#day").datepicker({
        dateFormat: "MM - DD - yy",
        showOn: "both",
        buttonText: '<i class="zmdi zmdi-chevron-down"></i>',
    });


});

function inicializarSignPad() {
    const canvas = document.getElementById('signature-pad');
    signaturePad = new SignaturePad(canvas);

    console.log("SignaturePad inicializado");

    // Ajustar tamaño del canvas
    function resizeCanvas() {
        const ratio = Math.max(window.devicePixelRatio || 1, 1);
        canvas.width = canvas.offsetWidth * ratio;
        canvas.height = canvas.offsetHeight * ratio;
        canvas.getContext("2d").scale(ratio, ratio);
        signaturePad.clear();
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Botón limpiar
    document.getElementById('clear').addEventListener('click', () => {
        signaturePad.clear();
    });

    // Botón guardar
    document.getElementById('save').addEventListener('click', () => {
        if (signaturePad.isEmpty()) {
            alert("Por favor, firma antes de guardar.");
        } else {
            const dataURL = signaturePad.toDataURL();
            console.log("Imagen Base64:", dataURL);
            window.open(dataURL);
        }
    });
}

const fotos = [];
let streamActual = null;
//alert(fotos.length);

function initCam() {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const fotoFinal = document.getElementById('fotoFinal');

    const selectorCamara = document.getElementById('optselectorCamara');
    const btnIniciar = document.getElementById('btniniciar');
    const btnCapturar = document.getElementById('btncapturar');



    btnIniciar.addEventListener('click', () => {
        if (streamActual) {
            streamActual.getTracks().forEach(track => track.stop());
        }
        const modo = selectorCamara.value;
        navigator.mediaDevices.getUserMedia({ video: { facingMode: modo } })
            .then(stream => {
                video.srcObject = stream;
                streamActual = stream;
            })
            .catch(err => {
                console.error(err);
                alert('No se pudo acceder a la cámara.');
            });
    });

    btnCapturar.addEventListener('click', () => {

        const placaInput = document.getElementById('placa');

        canvas.width = 945;
        canvas.height = 825;
        const ctx = canvas.getContext('2d');

        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        ctx.lineWidth = 2;
        ctx.strokeStyle = "black";
        ctx.strokeRect(0, 0, canvas.width, canvas.height);

        const ahora = new Date();
        const fecha = `${ahora.getFullYear()}-${String(ahora.getMonth() + 1).padStart(2, '0')}-${String(ahora.getDate()).padStart(2, '0')}`;
        const hora = `${String(ahora.getHours()).padStart(2, '0')}:${String(ahora.getMinutes()).padStart(2, '0')}`;
        const placa = placaInput.value || "SIN PLACA";
        const numerofoto = parseInt(fotos.length) + 1
        const textoSuperior = "Fotografía " + numerofoto;
        const textoInferior = `Fecha: ${fecha}, PLACA: ${placa} HORA: ${hora} `;

        ctx.font = "30px Arial";
        const margen = 10;
        const padding = 5;

        // Medidas del texto
        const anchoTextoSup = ctx.measureText(textoSuperior).width;
        const altoTexto = 35;

        // Rectángulo blanco para el texto superior
        ctx.fillStyle = "rgba(255,255,255,0.8)";
        ctx.fillRect(margen - padding, margen - padding, anchoTextoSup + padding * 2, altoTexto + padding * 2);

        // Dibujar el texto superior
        ctx.fillStyle = "black";
        ctx.fillText(textoSuperior, margen, margen + altoTexto);

        // Medidas del texto inferior
        const anchoTextoInf = ctx.measureText(textoInferior).width;

        // Rectángulo blanco para el texto inferior
        ctx.fillStyle = "rgba(255,255,255,0.8)";
        ctx.fillRect(margen - padding, canvas.height - altoTexto - margen - padding, anchoTextoInf + padding * 2, altoTexto + padding * 2);

        // Dibujar el texto inferior
        ctx.fillStyle = "black";
        ctx.fillText(textoInferior, margen, canvas.height - margen);

        // Blanco y negro opcional
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        /*for (let i = 0; i < data.length; i += 4) {
            const gris = (data[i] + data[i+1] + data[i+2]) / 3;
            data[i] = gris;
            data[i+1] = gris;
            data[i+2] = gris;
        }*/
        ctx.putImageData(imageData, 0, 0);

        // Exportar
        const dataURL = canvas.toDataURL('image/jpeg', 0.9);
        fotos.push(dataURL);
        fotoFinal.innerHTML = "";
        for (let i = 0; i < fotos.length; i++) {
            fotoFinal.innerHTML += `<img id="" alt="Imagen técnica capturada" src="${fotos[i]}" ></img>`;
        }
        //fotoFinal.src = dataURL;
    });
}

function detenerCamara() {
    if (streamActual) {
        streamActual.getTracks().forEach(track => track.stop());
        streamActual = null;
    }
}
