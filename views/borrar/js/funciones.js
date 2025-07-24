// const criterios=[
//        {'criterio':'Vehículo Completamente descargado.'},
//        {'criterio':'Llanta de repuesto sin protector y que permita el acceso.'},
//        {'criterio':'Sin dejar dinero, radio, u otros elementos extraíbles.'},
//        {'criterio':'Filtro de aire desatornillado'},
//        {'criterio':'Alarma desactivada'},
//        {'criterio':'Batería asequible (sin cubre batería).'},
//        {'criterio':'En buen estado de limpieza'},
//        {'criterio':'Sin cadena o candado en cabinas basculantes cuando aplique'},
//        {'criterio':'Sin tapacubos o copas plásticas'},
//        {'criterio':'Cinturones de seguridad libres y visibles.'},
//        {'criterio':'Enciende alguna luz del vehículo.'},
//        {'criterio':'Deposito del líquido de frenos visible'},
//        {'criterio':'Combustible suficiente'}
//     ]
// const contrato=[
//     'El servicio de revisión técnico - mecánica y de emisiones contaminantes que se presta en el Centro de Diagnóstico Automotor (CDA PUENTE ARANDA 12-44 S.A.S.), es el contemplado en los artículos 28, 50 y 51 de la ley 769 de 2002 y sus modificaciones, reglamentada por la Resolución 3768 de 2013, y resolución 20203040011355:2020.',
//     'El tiempo estimado de prueba, el cual es de 50 minutos, puede variar teniendo en cuenta el flujo vehicular, lo que ocasionará un tiempo adicional. Recuerde que es obligatoria la presencia física del vehículo en el CDA, la documentación y vigencia de la misma.',
//     'Se realizará a su vehículo las siguientes pruebas e inspecciones: para automóviles: emisiones contaminantes, frenos, luces, inspección sensorial, alineación, suspensión, presión sonora y si el vehículo es taxi se le aplicara la prueba de taxímetro; El certificado se le expedirá únicamente a los vehículos que cumplan con los requisitos establecidos por la resolución 3768 de 2013, la NTC 5375 y las demás que disponga la ley.',
//     'Al realizar la revisión Técnico-Mecánica y de emisiones contaminantes, su vehículo será sometido a pruebas con el grado de exigencia estipulado por el Ministerio de Transporte y el Ministerio de Ambiente, por lo tanto, el CDA, no se hace responsable por daños ocasionados en dicho proceso.',
//     'El cliente no debe ingresar a las áreas de inspección: para su espera está dispuesta una sala que permite de forma directa evidenciar su vehículo en la línea de revisión. El CDA no permite la interacción directa con el personal de la línea de revisión. Le solicitamos abstenerse de cualquier conversación con los inspectores, si es necesario comuníquese con el Director Técnico (Ingeniero).',
//     'Apreciado Usuario; El pago de la Revisión Técnico-Mecánica y de emisiones contaminantes no está sujeto a la entrega del CERTIFICADO “Si al verificar el resultado total de las pruebas, en las revisiones técnico-mecánica y de emisiones contaminantes, el vehículo automotor es reprobado de acuerdo con los criterios señalados para el efecto, el Centro de Diagnóstico Automotor o línea móvil, deberá entregar copia del Formato Uniforme de Resultados de las revisiones técnico-mecánica y de emisiones contaminantes al propietario, poseedor o tenedor del vehículo automotor, quien deberá efectuar las reparaciones pertinentes y subsanar los aspectos defectuosos dentro de los quince (15) días calendario contados a partir de la fecha en que fue reprobado. Una vez efectuadas las reparaciones el propietario, poseedor o tenedor del vehículo automotor podrá volver por una sola vez sin costo al mismo Centro de Diagnóstico Automotor o línea móvil, para someter el vehículo a la revisión de los aspectos r probados en la visita inicial. En la segunda visita al Centro de Diagnóstico Automotor CDA PUENTE ARANDA 12-44 S.A.S., el vehículo, en todos los casos, será objeto de una revisión sensorial completa para verificar que las condiciones generales del vehículo se mantienen, y se procederá a hacer una revisión gratuita de los aspectos reprobados en la visita inicial mediante revisión visual o revisión mecanizada, según corresponda Cuando de la revisión visual se compruebe que el vehículo pudo haber sufrido alguna alteración, este será sometido a una revisión total como si acudiera por primera vez y esta generará el respectivo cobro.”. Art 28 de la resolución 3768 de 2013, Nota: tenga en cuenta que los horarios del CDA se encuentran definidos de la siguiente manera: lunes a sábado hay apertura de lunes a viernes de 6:30 am a 6:00 pm, sábados de 7:00 am a 4:00 pm, domingos y festivos de 7:00 am a 12:00 pm.',
//     'El vehículo debe venir preparado para la revisión: como mínimo debe estar sin copas (tapacubos) en los rines, los dispositivos de seguridad desactivados y la correcta presión del aire de las llantas, de lo contrario se le informara al cliente para que ajuste el vehículo a las condiciones exigidas.',
//     'Una vez realizada la revisión técnico-mecánica y de emisiones contaminantes a su vehículo, el CDA NO REALIZARÁ DEVOLUCIONES DE DINERO.',
//     'Por favor, absténgase de dar propinas, obsequios o cualquier tipo de remuneración por la certificación de su vehículo; el hacerlo pone en riesgo la estabilidad laboral del empleado, ya que el proceso de inspección debe ser imparcial.',
//     'Los resultados de la inspección son confidenciales y están protegidos.',
//     'El personal que realiza que participa en las actividades de inspección cuenta con el conocimiento y la competencia de acuerdo a los requisitos legales exigidos',
//     'El CDA no responderá por objetos dejados en los vehículos, que no sean reportados en el control de entrada.',
//     'Se solicita revisar dentro del CDA su vehículo, una vez le sea entregado, así como sus documentos. Después de retirado, el CDA no atenderá ninguna apelación',
//     'Si su vehículo no cumple con la profundidad de labrado de las llantas este será rechazado por este ítem y se realiza la prueba de eficacia de frenado, sin embargo, cuando ingrese por segunda vez se realizará nuevamente la prueba de eficacia de frenado y si esta no aprueba usted será rechazado nuevamente y tendrá que pagar nuevamente la revisión técnico mecánica total.',
//     'El CDA cuenta con una póliza civil profesional la cual ampara la responsabilidad civil profesional resultante de la prestación deficiente del servicio por parte del CDA',
//     'Recuerde que el CDA cuenta con un procedimiento de seguridad de la información que respalda la información resultante',
//     'El CDA PUENTE ARANDA 12-44 S.A.S., contamos con acreditación ONAC, vigente a la fecha, con código de acreditación 21-CDA-097 bajo la norma ISO/IEC 17020:2012, para vehículos livianos, otorgada el 2022-07-05, con vencimiento el 2025-07-04 Este puede ser confirmado en la página de ONAC www.onac.org.co.',
//     'Si por ley o compromisos contractuales se deba divulgar su información confidencial, usted será notificado salvo que lo prohíba la ley. La información obtenida por fuentes distintas al cliente será tratada de manera confidencial.',
//     'En el aviso de privacidad se da a conocer con antelación la información que el CDA tiene intensión hacer pública.',
//     'El Certificado de RTM EYC es vigente por un (1) año, y ahora es de manera digital usted podrá consultarlo por la página de RUNT ciudadanos.',
//     'Señor usuario recuerde que las revisiones preventivas ni la venta de SOAT favorecen, ni desfavorecen el resultado de la revisión técnico-mecánica',
//     'Señor usuario recuerde que las tarifas del CDA se encuentran reguladas por la resolución 3318:2015 y 20213040063835 de 2021, la cual se modifica el artículo 1o de la Resolución 3318 de 2015'
//     ]

const criterios=data.criterios;
const contrato=data.contrato;

function uiConceptos(){
    const contenedor = document.getElementById("criterio")
    
    criterios.forEach(function(item, index) {
     							
    contenedor.innerHTML += '<div class="form-holder form-holder-2">'+
                                '<label for="gnv" class="special-label-1">'+item.criterio+'</label>'+
                                        '<select name="gnv" id="gnv" class="form-control">'+
                                            '<option value="true">SI</option>'+
                                            '<option value="false">NO</option>'+
                                            '<option value="" selected>N/A</option>'+
                                        '</select>'+
                                        '<span class="select-btn">'+
                                        '	<i class="zmdi zmdi-chevron-down"></i>'+
                                '</span>'+
                            '</div>';
    })
}

function uiCondiciones(){
    const contenedor = document.getElementById("contrato")
    for(let i=0;i<contrato.length;i++){
        contenedor.innerHTML += i+1 + ") " + contrato[i]+"<br><br>";
    }
}


uiConceptos();
uiCondiciones();




