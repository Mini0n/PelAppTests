if (Terminos.find().count() === 0){
  console.log('Terminos === 0');
  Terminos.insert({
    name: 'Acolia',
    text: 'Heces de color blanco.',
    ask:  '¿De qué color es su popo? ¿Blanca?',
    url:  ''
  });
  Terminos.insert({
    name: 'Acúfenos',
    text: 'Percibir un sonido que no esta en el ambiente.',
    ask:  '¿Ha notado que le zumban los oídos?',
    url:  ''
  });
  Terminos.insert({
    name: 'Adenomegalias',
    text: 'Aumento de tamaño de uno o varios ganglios linfáticos.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Adinamia',
    text: 'Ausencia total de fuerza física.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Aerofagia',
    text: 'Ingestión de aire que produce distensión o gases.',
    ask:  '¿Se traga el aire?',
    url:  ''
  });
  Terminos.insert({
    name: 'Aliño',
    text: 'Aseo o buen orden en el modo de arreglarse de una persona.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Alteraciones de la audición',
    text: '',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Alteraciones de la eyaculación',
    text: 'Eyaculación precoz retardada o retrograda.',
    ask:  '¿Algún problema al eyacular?',
    url:  ''
  });
  Terminos.insert({
    name: 'Alteraciones de la líbido',
    text: 'Aumento o disminución del deseo sexual.',
    ask:  '¿Cómo esta su deseo sexual?',
    url:  ''
  });
  Terminos.insert({
    name: 'Alteraciones de la marcha',
    text: 'Incapacidad para realizar una marcha rítmica, simétrica y armoniosa.',
    ask:  '¿Alguna molestia al caminar, siente que se va de lado o pierde el equilibrio?',
    url:  ''
  });
  Terminos.insert({
    name: 'Alteraciones de la visión',
    text: 'Alteraciones para percibir colores, formas, objetos o movimiento.',
    ask:  '¿Alguna alteración en la visión?',
    url:  ''
  });
  Terminos.insert({
    name: 'Alteraciones del gusto',
    text: 'Alteraciones para percibir sabores.',
    ask:  '¿Alguna alteración en el gusto?',
    url:  ''
  });
  Terminos.insert({
    name: 'Alteraciones del olfato',
    text: 'Alteraciones para percibir olores.',
    ask:  '¿Ha notado que su olfato aumentó o disminuyó?',
    url:  ''
  });
  Terminos.insert({
    name: 'Alteraciones escrotales',
    text: 'Cambios en el escroto.',
    ask:  '¿Ha notado algun cambio en su escroto?',
    url:  ''
  });
  Terminos.insert({
    name: 'Alteraciones menstruales',
    text: 'Alteraciones tales como: Ausencia de ciclo, hemorragia uterina de poco o mucho flujo, pocos o muchas días, intervalos entre ciclos prolongados, etc.',
    ask:  '¿Algún cambio reciente en su menstruación, días, flujo?',
    url:  ''
  });
  Terminos.insert({
    name: 'Amenorrea',
    text: 'Ausencia de menstruación. Puede ser primaria si nunca ha menstruado a los 14-16 años o secundaria si menstruaba y no ha tenido mesntruación por 6 meses o 3 ciclos regulares',
    ask:  '¿Cuándo fue la fecha de última mesntruación?',
    url:  ''
  });
  Terminos.insert({
    name: 'Andropausia',
    text: 'Pérdida de actividad de las glándulas sexuales masculinas.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Anhedonia',
    text: 'Incapacidad para experimentar placer, interés o satisfacción en casi todas las actividades.',
    ask:  '¿Ha perdido el gusto por realizar sus actividades preferidas?',
    url:  ''
  });
  Terminos.insert({
    name: 'Anorexia',
    text: 'Falta anormal de ganas de comer.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Antecedentes alérgicos',
    text: 'Indagar alergía a fármacos, alimentos, animales o plantas.',
    ask:  '¿Alérgico a algun medicamento o alimento?',
    url:  ''
  });
  Terminos.insert({
    name: 'Antecedentes convulsivos',
    text: 'Indagar si ha presentado alguna convulsión.',
    ask:  '¿Alguna vez ha convulsionado?',
    url:  ''
  });
  Terminos.insert({
    name: 'Antecedentes GinecoObstétricos',
    text: 'Antecedentes correspondientes al número de embarazos, partos, césareas, abortos, las caracteristicas de su ciclo menstrual, inicio de vida sexual activa, método de planificación familiar entre otros.',
    ask:  '¿Cuántas veces se ha embarazado? ¿Fue parto o cesárea? ¿Algún aborto?',
    url:  ''
  });
  Terminos.insert({
    name: 'Antecedentes quirúrgicos',
    text: 'Indagar algún procedimiento quirúrgico, abordaje y evolución.',
    ask:  '¿Le han practicado cirugías?',
    url:  ''
  });
  Terminos.insert({
    name: 'Antecedentes transfusionales',
    text: 'Indagar si le han pasado sangre o derivados al paciente.',
    ask:  '¿Alguna vez le han pasado sangre o plaquetas?',
    url:  ''
  });
  Terminos.insert({
    name: 'Antecedentes traumáticos',
    text: 'Indagar sobre caídas, golpes, fracturas o luxaciones.',
    ask:  '¿Alguna vez se ha fracturado? ¿Se ha  caído?',
    url:  ''
  });
  Terminos.insert({
    name: 'Anticrotálico',
    text: 'Suero contra veneno de víbora de cascabel.',
    ask:  '¿Alguna vez le ha mordido una víbora de cascabel? ¿Recibió tratamiento?',
    url:  ''
  });
  Terminos.insert({
    name: 'AntiRh',
    text: 'Anticuerpos contra el antígeno Rh de los eritrocitos.',
    ask:  '¿Estando embarazada le inyectaron anticuerpos? ¿Anti-D?',
    url:  ''
  });
  Terminos.insert({
    name: 'Anuria',
    text: 'Falta de producción de orina.',
    ask:  '¿Ha dejado de orinar?',
    url:  ''
  });
  Terminos.insert({
    name: 'Apatía',
    text: 'Estado de desinterés y falta de motivación o entusiasmo.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Apnea',
    text: 'Suspensión transitoria de la respiración.',
    ask:  '¿Ronca?',
    url:  ''
  });
  Terminos.insert({
    name: 'Area corporal total',
    text: 'Raíz de peso por altura / 3600',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Artralgia',
    text: 'Dolor en las articulaciones',
    ask:  '¿Molestia o dolor en las articulaciones?',
    url:  ''
  });
  Terminos.insert({
    name: 'Astenia',
    text: 'Sencación generalizada de cansancio, fatiga,  debilidad física o psíquica.',
    ask:  '¿Ha dejado de realizar actividades por sentirse cansado(a)?',
    url:  ''
  });
  Terminos.insert({
    name: 'Aumento del volumen en cuello',
    text: 'Crecimiento del cuello, puede deberse a patología de órganos alojados en el cuello.',
    ask:  '¿Ha notado que su cuello ha crecido? ¿Le aprieta el cuello de la camisa?',
    url:  ''
  });
  Terminos.insert({
    name: 'Auscultación',
    text: 'Exploración de los sonidos producidos en el interior del cuerpo con ayuda de instrumental dedicado a tal efecto (estetoscopio, Pinard).',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'BAAR',
    text: 'Bacilo Ácido Alcohol Resistente - Micobacterias',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'BCG',
    text: 'Bacilo Calmette-Guérin. Vacuna contra la tuberculosis.',
    ask:  '¿Le pusieron la vacuna contra la tuberculosis? Revisar brazo',
    url:  ''
  });
  Terminos.insert({
    name: 'Caracteres sexuales primarios',
    text: 'Presencia de órganos reproductores. Pene, vagina, ovarios, testículo, etc.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Caracteres sexuales secundarios',
    text: 'Signos físicos de madurez sexual. Desarrollo de senos, vello púbico, voz grave, caderas, barba, etc.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Características de la piel',
    text: 'Coloración, pigmentación, turgencia, temperatura, lesiones, etc.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Características del chorro',
    text: 'Continuo, interrumpido, chorro o gotas, color, grueso o delgado.',
    ask:  '¿Cómo es el chorro de orina?',
    url:  ''
  });
  Terminos.insert({
    name: 'Características heces',
    text: 'Tamaño, forma, consistencia, olor, color, frecuencia.',
    ask:  '¿Cómo es su popo?',
    url:  ''
  });
  Terminos.insert({
    name: 'Carcaterísticas del pelo',
    text: '¿Coloración? ¿Quebradizo? ¿Implantación? ¿Desprendimiento?',
    ask:  '¿Ha notado que su cabello esta quebradizo o se le cae al bañarse?',
    url:  ''
  });
  Terminos.insert({
    name: 'Cardiopatías',
    text: 'Entidades causadas por afección al aparato cardiovascular tales como: Hipertensión arterial, infarto, muerte súbita, valvulopatías, etc.',
    ask:  '¿Alguien en su familia padece del corazón?',
    url:  ''
  });
  Terminos.insert({
    name: 'Causa real o aparente',
    text: 'Motivo verdadero por el que acude el paciente.',
    ask:  'Cuénteme, ¿Por qué la visita?',
    url:  ''
  });
  Terminos.insert({
    name: 'Cefalea',
    text: 'Dolor de cabeza.',
    ask:  '¿Ha tenido dolor de cabeza?',
    url:  ''
  });
  Terminos.insert({
    name: 'Cianosis',
    text: 'Coloración azul de la piel.',
    ask:  '¿Ha notado alguna coloración azul en sus dedos o labios?',
    url:  ''
  });
  Terminos.insert({
    name: 'Circunsición',
    text: 'Extirpación del prepucio.',
    ask:  '¿Esta circundado?',
    url:  ''
  });
  Terminos.insert({
    name: 'Climaterio ',
    text: 'Periodo antes y después de la menstruación donde se agotan los estrógenos y deriva en la menopausia.',
    ask:  '¿Ha comenzado notar que su periodo se vuelve muy irregular o que le ha dejado de bajar por varios meses? ¿Bochornos, insomnio, pérdida de memoria, depresión?',
    url:  ''
  });
  Terminos.insert({
    name: 'Coluria',
    text: 'Bilirrubinas en orina.',
    ask:  '¿Su orina es como refresco de cola?',
    url:  ''
  });
  Terminos.insert({
    name: 'Conformación',
    text: '',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Constipación',
    text: 'Dificultad para eliminar heces.',
    ask:  '¿Padece estreñimiento?',
    url:  ''
  });
  Terminos.insert({
    name: 'Constitución',
    text: '',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Cónyuge',
    text: 'Esposa o esposo.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Cooperación',
    text: 'El paciente facilita o no la entrevista médica',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Coordinación',
    text: 'Capacidad de los músculos para sincronizarse y realizar una contracción eficiente y armónica.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Corea',
    text: 'Movimientos involuntarios rápidos y sin propósito que consisten en flexión y extensión de dedos, ascenso y descenso de hombros, o simplemente muecas.',
    ask:  '¿Ha experimentado movimientos involuntarios?',
    url:  ''
  });
  Terminos.insert({
    name: 'Criptorquidia',
    text: 'Los testículos no descienden hacia el escroto.',
    ask:  '¿Ambos testículos se encuentran en el escroto?',
    url:  ''
  });
  Terminos.insert({
    name: 'Deformidades',
    text: 'Desproporción o irregularidad en la forma de una parte del organismo.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Diabetes Mellitus',
    text: 'Enfermedad endocrino metabólica caracterizada por niveles elevados de glucosa en sangre.',
    ask:  '¿Usted o alguien de su familia tiene el azúcar elevada en la sangre?',
    url:  ''
  });
  Terminos.insert({
    name: 'Diagnóstico anatomotopográfico',
    text: 'Determina la ubicación de lesiones en los órganos o tejidos.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Diagnóstico etiológico',
    text: 'Determina las causas de la enfermedad.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Diagnóstico fisiopatológico',
    text: 'Determina las alteraciones funcionales que se han producido.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Diagnóstico por paraclínicos',
    text: 'Determina el probable diagnóstico con base en los rusultados de laboratorio o gabinete.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Diagnóstico signológico',
    text: 'Identificar los signos del paciente.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Diagnóstico sindromático',
    text: 'Agrupar signos y síntomas con un origen común.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Diagnóstico sintomático',
    text: 'Identificar los síntomas del paciente.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Directo',
    text: 'Interrogas al paciente.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Disfonia',
    text: 'Alteración en la calidad de la voz.',
    ask:  '¿Ha notado voz ronca?',
    url:  ''
  });
  Terminos.insert({
    name: 'Dismenorrea',
    text: 'Menstruación dolorosa.',
    ask:  '¿Cuándo esta en su periodo sufre cólicos? ¿El dolor es tan intenso que la incapacita?',
    url:  ''
  });
  Terminos.insert({
    name: 'Disnea',
    text: 'Dificultad para respirar.',
    ask:  '¿Ha tenido dificultad para respirar o siente que se ahoga?',
    url:  ''
  });
  Terminos.insert({
    name: 'Disnea de esfuerzo',
    text: 'Falta de aire al realizar alguna actividad.',
    ask:  '¿Cuándo hace alguna actividad le falta el aire?',
    url:  ''
  });
  Terminos.insert({
    name: 'Disnea paroxística',
    text: 'Dificultad para respirar durante el sueño que despierta al paciente.',
    ask:  '¿Mientras duerme se despierta con sensación de falta de aire o que se esta ahogando?',
    url:  ''
  });
  Terminos.insert({
    name: 'Disomnia',
    text: 'Cualquier alteración que afecte el sueño.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Dispareunia',
    text: 'Coito doloroso.',
    ask:  '¿Experimenta dolor al tener relaciones sexuales?',
    url:  ''
  });
  Terminos.insert({
    name: 'Disuria',
    text: 'Dolor al orinar.',
    ask:  '¿Le duele o arde cuando orina?',
    url:  ''
  });
  Terminos.insert({
    name: 'Dolor óseo',
    text: 'Dolor en huesos.',
    ask:  '¿Molestia o dolor en los huesos?',
    url:  ''
  });
  Terminos.insert({
    name: 'Dolor Retroureteral',
    text: 'Dolor de inicio abrupto localizado en el flanco y que irradia hacia genitales.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Dolor testicular',
    text: 'Dolor originado o irradiado hacia la zona testicular.',
    ask:  '¿Dolor en el testículo?',
    url:  ''
  });
  Terminos.insert({
    name: 'Dolor torácico',
    text: 'Dolor localizado en tórax.',
    ask:  '¿Le duele el pecho? Señáleme con un dedo en donde le duele.',
    url:  ''
  });
  Terminos.insert({
    name: 'DPT',
    text: 'Vacuna conta DifteriaPertussisTétanos.',
    ask:  '¿Le pusieron la vacuna contra el tétanos?',
    url:  ''
  });
  Terminos.insert({
    name: 'Dx Diferenciales',
    text: 'Enfermedades que presentan un cuadro clínico similar a la enfermedad que padece el paciente y deben excluidos mediante pruebas complementarias para llegar al diagnóstico certero.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Dx Nosológico',
    text: 'Determinación específica de la enfermedad. V. Gr. " Fiebre Tifoidea".',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Edad aparente',
    text: '',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Edema',
    text: 'Acumulación de líquido en espacio intersticial.',
    ask:  '¿Ha notado que se le hinchan las piernas?',
    url:  ''
  });
  Terminos.insert({
    name: 'Enfermedades broncopulmonares',
    text: 'Entidades que afectan la vía aérea inferior tales como neumonía, cancer de pulmón, fibrosis quística, tuberculosis, etc.',
    ask:  '¿Alguien en su familia padece enfermedades del pulmón?',
    url:  ''
  });
  Terminos.insert({
    name: 'Enfermedad  infectocontagiosas',
    text: 'Entidades causadas por microorganismos tales como: neumonía, sífilis, VIH, escabiasis, faringoamigdalitis, etc.',
    ask:  '¿Alguien en su familia padece tuberculosis o VIH?',
    url:  ''
  });
  Terminos.insert({
    name: 'Enfermedades mentales',
    text: 'Entidades que afectan la esfera cognositiva tales como: demencia, alzheimer, esquizofrenia, Trastorno ObsesivoCompulsivo, etc.',
    ask:  '¿En su familia hay antecedentes de alzheimer?',
    url:  ''
  });
  Terminos.insert({
    name: 'Enfermedades neurológicas',
    text: 'Entidades que afectan el sistema nervioso tales como: aneurismas, hemorragia subdural, evento cerebrovascular, parkinson, etc.',
    ask:  '¿Alguien en su familia ha tenido un infarto cerebral?',
    url:  ''
  });
  Terminos.insert({
    name: 'Enfermedades reumáticas',
    text: 'Entidades causadas por afección al aparato locomotor o tejido conectivo tales como: Lupus, artritis reumatoide, espondilitis, etc.',
    ask:  '¿Alguien en su familia padece artritis reumatoide?',
    url:  ''
  });
  Terminos.insert({
    name: 'Enfermedades tiroideas',
    text: 'Entidades que afectan la glándula tiroides tales como: bocio, tiroiditis, hipertiroidismo, hipotiroidismo, etc.',
    ask:  '¿Alguien en su familia tiene hiper o hipotiroidismo?',
    url:  ''
  });
  Terminos.insert({
    name: 'Enfermedades exantemáticas',
    text: 'Infecciones que se manifiestan por una erupción cutánea generalizada afectando con mayor frecuencia a niños tales como: Varicela, Sarampión, Rubeóla, etc.',
    ask:  '¿A que edad le dio varicela? ¿Sarampión?',
    url:  ''
  });
  Terminos.insert({
    name: 'Enterorragia',
    text: 'Hemorragia procedente de mucosa intestinal.',
    ask:  '¿Cuándo va al baño ha expulsado sangre fresca?',
    url:  ''
  });
  Terminos.insert({
    name: 'Epistaxis',
    text: 'Hemorragia de origen nasal.',
    ask:  '¿Le ha sangrado la nariz?',
    url:  ''
  });
  Terminos.insert({
    name: 'Equimosis',
    text: 'Depósito subcutáneo de sangre extravasada debajo de piel intacta.',
    ask:  '¿Tiene moretones?',
    url:  ''
  });
  Terminos.insert({
    name: 'Escala de Bristol',
    text: 'Escala para clasificar la forma de las heces.',
    ask:  'Imagen',
    url:  ''
  });
  Terminos.insert({
    name: 'Estado de alerta',
    text: 'Situación en la que un individuo se encuentra despierto y consciente del entorno.',
    ask:  'Para cuantificarla se utiliza la escala de Glasgow',
    url:  ''
  });
  Terminos.insert({
    name: 'Estado nutricional',
    text: '',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Esteatorrea',
    text: 'Diarrea con cantidad elevada de grasas.',
    ask:  '¿Ha notado diarrea con gotitas de grasa?',
    url:  ''
  });
  Terminos.insert({
    name: 'Estudios paraclínicos ',
    text: 'Estudios de gabinete o laboratorio que ayuden a confirmar o descartar un diagnóstico.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'ETS',
    text: 'Enfermedades de Transmisión Sexual.',
    ask:  '¿Ha padecido alguna infección de transmisión sexual? ¿Sífilis, Herpes, Gonorrea?',
    url:  ''
  });
  Terminos.insert({
    name: 'Euforia',
    text: 'Sensación exteriorizada de optimismo y bienestar.',
    ask:  '¿Ha sentido una felicidad excesiva que le desborda?',
    url:  ''
  });
  Terminos.insert({
    name: 'Evolución',
    text: 'Transformación de la enfermedad a través del tiempo.',
    ask:  '¿Mejoró o empeoró?',
    url:  ''
  });
  Terminos.insert({
    name: 'Expectoración',
    text: 'Arrojar esputo por la boca.',
    ask:  '¿Ha tenido flemas?',
    url:  ''
  });
  Terminos.insert({
    name: 'Exploración instrumental',
    text: '',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Facie',
    text: 'Expresión o aspecto de la cara.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Factores de riesgo laboral',
    text: 'Exposición a gases o polvos tóxicos durante el trabajo.',
    ask:  '¿Se expone a tóxicos en su trabajo?',
    url:  ''
  });
  Terminos.insert({
    name: 'Fatigabilidad',
    text: 'Sensación de falta de energía, agotamiento o cansancio.',
    ask:  '¿Ha notado que le falta energía o se cansa mas pronto?',
    url:  ''
  });
  Terminos.insert({
    name: 'Fiebre',
    text: 'Aumento de la temperatura corporal por encima de la normal.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Flatulencia',
    text: 'Mezcla de gases intestinales expulsados por el ano.',
    ask:  '¿Ha tenido gases?',
    url:  ''
  });
  Terminos.insert({
    name: 'Fosfenos',
    text: 'Sensación de ver manchas luminosas.',
    ask:  '¿Ve manchas de colores?',
    url:  ''
  });
  Terminos.insert({
    name: 'Frecuencia cardiaca',
    text: 'Número de veces que late el corazón en un minuto.',
    ask:  'Normal de 60 a 100 Latidos por minuto (lpm)',
    url:  ''
  });
  Terminos.insert({
    name: 'Frecuencia respiratoria',
    text: 'Número de respiraciones por minuto.',
    ask:  'Normal de 12 a 18 respiraciones por minuto (rpm)',
    url:  ''
  });
  Terminos.insert({
    name: 'FUM',
    text: 'Fecha Última Menstruación.',
    ask:  '¿Cuándo fue la última vez que menstruó?',
    url:  ''
  });
  Terminos.insert({
    name: 'Funciones mentales superiores',
    text: 'Atención, conducta, estado de la conciencia, capacidad intelectual, memoria, estado afectivo, juicio y pensamiento.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Gammaglobulina',
    text: 'Anticuerpos. ',
    ask:  '¿Alguna vez le han inyectado inmunoglobulinas?',
    url:  ''
  });
  Terminos.insert({
    name: 'Goteo Terminal',
    text: 'Prolongación de la micción en forma de gotas.',
    ask:  '¿Después del chorro de orina le quedan gotitas?',
    url:  ''
  });
  Terminos.insert({
    name: 'Hacinamiento',
    text: 'Mas de 3 personas por habitación.',
    ask:  '¿Cuántas personas duermen por cuarto?',
    url:  ''
  });
  Terminos.insert({
    name: 'Halitosis',
    text: 'Fetidez del aliento.',
    ask:  '¿Ha notado algun cambio en el olor de su aliento?',
    url:  ''
  });
  Terminos.insert({
    name: 'Hematemesis',
    text: 'Vómito de sangre procedente de tubo digestivo.',
    ask:  '¿Ha vomitado sangre?',
    url:  ''
  });
  Terminos.insert({
    name: 'Hematuria',
    text: 'Sangre en orina.',
    ask:  '¿Ha orinado sangre?',
    url:  ''
  });
  Terminos.insert({
    name: 'Hemoptisis',
    text: 'Expectoración de sangre.',
    ask:  '¿Ha tosido con sangre? ¿Ha tenido flemas rojas?',
    url:  ''
  });
  Terminos.insert({
    name: 'Hemorragia transvaginal',
    text: 'Expulsión anormal de sangre a través de la vagina.',
    ask:  '¿Ha notado sangrado cuando no es fecha de menstruación o por periodos prolongados mientras menstrua?',
    url:  ''
  });
  Terminos.insert({
    name: 'Hiperactividad',
    text: 'Aumento de la función normal.',
    ask:  '¿Ha notado que últimanente ha estado mas activo?',
    url:  ''
  });
  Terminos.insert({
    name: 'Hiperestesia',
    text: 'Aumento de la sensibilidad.',
    ask:  '¿Tiene mayor sensibilidad en alguna parte de su cuerpo?',
    url:  ''
  });
  Terminos.insert({
    name: 'Hiperhidrosis',
    text: 'Sudoración excesiva, preferentemente en plantas y palmas.',
    ask:  '¿Sudoración',
    url:  ''
  });
  Terminos.insert({
    name: 'Hiperorexia',
    text: 'Aumento del apetito.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Hipersomnia',
    text: 'Sueño excesivamente profundo y prolongado o somnolencia extrema.',
    ask:  '¿Duerme mucho y se siente aun con sueño?',
    url:  ''
  });
  Terminos.insert({
    name: 'Hipoactividad',
    text: 'Disminución de la función normal.',
    ask:  '¿Ha notado que últimamente se siente lento o realiza menos actividades?',
    url:  ''
  });
  Terminos.insert({
    name: 'Hipocolia',
    text: 'Disminución de pigmentos biliares en heces.',
    ask:  '¿De que color es su popo? ¿Mas clara de lo normal?',
    url:  ''
  });
  Terminos.insert({
    name: 'Hipoestesia',
    text: 'Disminución de la sensibilidad.',
    ask:  '¿Tiene menos sensibilidad en alguna parte de su cuerpo?',
    url:  ''
  });
  Terminos.insert({
    name: 'Hiporexia',
    text: 'Disminución del apetito.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Hipotonía',
    text: 'Disminución del tono muscular.',
    ask:  '¿Ha notado que pierde músculo en alguna parte del cuerpo?',
    url:  ''
  });
  Terminos.insert({
    name: 'Ictericia',
    text: 'Coloración amarillenta de la piel.',
    ask:  '¿Se ha puesto amarillo en la piel, las uñas o los ojos?',
    url:  ''
  });
  Terminos.insert({
    name: 'IMC',
    text: 'Índice de Masa Corporal.',
    ask:  'Masa en Kg / talla cm al cuadrado',
    url:  ''
  });
  Terminos.insert({
    name: 'Incontinencia',
    text: 'Pérdida involuntaria de orina.',
    ask:  '¿Se le salen gotas de orina cuando ríe o hace esfuerzo?',
    url:  ''
  });
  Terminos.insert({
    name: 'Indirecto',
    text: 'Interrogas a un familiar o conocido del paciente.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Insomnio',
    text: 'Falta anormal de sueño y/o dificultad para conciliarlo.',
    ask:  '¿Dificultad para dormir?',
    url:  ''
  });
  Terminos.insert({
    name: 'Inspección',
    text: '',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Integridad',
    text: '',
    ask:  '¿Le falta alguna parte del cuerpo?',
    url:  ''
  });
  Terminos.insert({
    name: 'Intolerancia al calor',
    text: 'Sensibilidad anormal al calor, causa molestias leves al exponerse a ambientes con temperatura elevada.',
    ask:  '¿Aguna molestia cuando se expone a ambientes calurosos?',
    url:  ''
  });
  Terminos.insert({
    name: 'Intolerancia al frío',
    text: 'Sensibilidad anormal al frío que causa malestar leve al exponerse a ambientes de baja temperatura.',
    ask:  '¿Tolera ambientes fríos? ¿Malestar cuando baja la temperatura?',
    url:  ''
  });
  Terminos.insert({
    name: 'Irritabilidad',
    text: 'Tendencia a sentir ira por cualquier cosa o situación.',
    ask:  '¿Ha estado irritable últimamente?',
    url:  ''
  });
  Terminos.insert({
    name: 'Jacal',
    text: 'Vivienda de un solo cuarto con piso de tierra y techo de paja.',
    ask:  '¿De qué material esta contruido su casa y cuántos cuartos tiene?',
    url:  ''
  });
  Terminos.insert({
    name: 'Lenguaje',
    text: 'Capacidad del paciente para comunicarse.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Lesión Primaria',
    text: 'Lesión cutánea que asienta sobre piel sana.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Lesión secundaria',
    text: 'Lesión cutánea que asienta sobre piel previamente afectada.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Leucorrea',
    text: 'Salida de secreción blanquecina a través de la vagina.',
    ask:  '¿Ha notado alguna secreción a traves de la vagina? ¿Mancha la ropa interior?',
    url:  ''
  });
  Terminos.insert({
    name: 'Limitación al movimiento',
    text: 'Incapacidad para realizar movimiento.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Lipotimias',
    text: 'Sensación de desmayo pero sin que este ocurra.',
    ask:  '¿Ha sentido que se quiere desmayar?',
    url:  ''
  });
  Terminos.insert({
    name: 'Marcha',
    text: 'Desplazamiento a pie.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Mareo',
    text: 'Sensación de malestar acompañada de náuseas, vómitos, visión borrosa, lipotimia, etc.',
    ask:  '¿Ha presentado mareos?',
    url:  ''
  });
  Terminos.insert({
    name: 'Melena',
    text: 'Expulsión de heces con sangre digerida. Sugiere una hemorragia de tubo digestivo alto.',
    ask:  '¿Ha tenido popo negra y maloliente?',
    url:  ''
  });
  Terminos.insert({
    name: 'Menopausia',
    text: 'Cese permanente de la menstruación.',
    ask:  '¿Menstrúa actualmente?',
    url:  ''
  });
  Terminos.insert({
    name: 'Meteorismo',
    text: 'Distensión abdominal por exceso de gases en intestino.',
    ask:  '¿Se ha sentido distendido y con gases recientemente?',
    url:  ''
  });
  Terminos.insert({
    name: 'Método de anticoncepción',
    text: 'Cualquier acto  dispositivo o medicación que impida la formación de un embarazo viable.',
    ask:  '¿Utiliza algún tipo de método anticonceptivo o de planeación familiar?',
    url:  ''
  });
  Terminos.insert({
    name: 'Mialgia',
    text: 'Dolor muscular.',
    ask:  '¿Molestia o dolor en las piernas o brazos?',
    url:  ''
  });
  Terminos.insert({
    name: 'Mixto',
    text: 'Interrogatorio al paciente y al familiar/conocido.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'mmHG',
    text: 'Milímetro de Mercurio.',
    ask:  'Para pasar de mmHg a cmH2O multiplicar cmH2O por 1.359',
    url:  ''
  });
  Terminos.insert({
    name: 'Motricidad',
    text: 'Movimiento voluntario de una persona.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Movimiento anormales',
    text: 'Síndromes neurológicos en los que puede haber un exceso de movimiento o por enlentecimiento de movimientos automáticos o voluntarios, que no estén relacionados con debilidad o espasticidad',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Nefropatías',
    text: 'Entidades causadas por afección al riñón tales como: insuficiencia renal, litos renales, glomerulopatías, etc.',
    ask:  '¿Alguien en su familia con insuficienca renal? ¿Alguien que use diálisis?',
    url:  ''
  });
  Terminos.insert({
    name: 'Neoplasias',
    text: 'Entidades causadas por una proliferación anormal de células como: Cáncer de mama, de pulmón, de útero, de estómago, etc.',
    ask:  '¿Alguien en su familia ha tenido cáncer?',
    url:  ''
  });
  Terminos.insert({
    name: 'Nictámero',
    text: 'Orinar mas en el día que en la noches.',
    ask:  '¿Va a orinar mas en el día o en la noche?',
    url:  ''
  });
  Terminos.insert({
    name: 'Nistagmo',
    text: 'Movimiento involuntario, rápido y repetitivo de los ojos, pudiendo ser de lado a lado, o de arriba hacia abajo.',
    ask:  '¿Ha notado visión borrosa o que ve doble?',
    url:  ''
  });
  Terminos.insert({
    name: 'Oliguria',
    text: 'Disminución en el volumen de orina.',
    ask:  '¿Ha orinado menos?',
    url:  ''
  });
  Terminos.insert({
    name: 'Orientación',
    text: 'El individuo reconoce en donde de encuentra.',
    ask:  '¿Sabe donde se encuentra?',
    url:  ''
  });
  Terminos.insert({
    name: 'Palidez',
    text: 'Tonalidad de la piel mas clara de lo habitual.',
    ask:  '¿Se ha notado pálido?',
    url:  ''
  });
  Terminos.insert({
    name: 'Palpación',
    text: '',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Palpitaciones',
    text: 'Sensación del latido cardiaco.',
    ask:  '¿Siente como le late el corazón?',
    url:  ''
  });
  Terminos.insert({
    name: 'Papanicolaou',
    text: 'También llamada citología exfoliativa. Prueba para detectar cáncer cervicouterino.',
    ask:  '¿Cuándo fue su último Papanicolau?',
    url:  ''
  });
  Terminos.insert({
    name: 'Parálisis',
    text: 'Pérdida total o parcial de la capacidad de movimiento.',
    ask:  '¿Incapacidad o dificultad para mover alguna parte del cuerpo?',
    url:  ''
  });
  Terminos.insert({
    name: 'Parásitos',
    text: 'Ciertos parásitos son expulsado en heces.',
    ask:  '¿Ha notado en su popo como cachitos de tela?',
    url:  ''
  });
  Terminos.insert({
    name: 'Pares craneales',
    text: '12 nervios que emergen de la base cerebral o del tallo encefálico y abandonan el cráneo a través de los agujero en su base.',
    ask:  '1.- Olfatorio 2.- Óptico 3.- Oculomotor 4.- Troclear 5.- Trigémino 6.- Abduscens 7.- Facial 8.- Vestibulococlear 9.- Glosofaringeo 10.- Vago 11.- Accesorio 12.- Hipogloso',
    url:  ''
  });
  Terminos.insert({
    name: 'Paresia',
    text: 'Parálisis parcial o debilitamiento de la contractilidad muscular.',
    ask:  '¿Sensación de falta de fuerza en alguna parte del cuerpo? ¿Toma algo y se le caen las cosas?',
    url:  ''
  });
  Terminos.insert({
    name: 'Parestesias',
    text: 'Sensación anormal de cosquilleo, hormigueo, calor o frío en alguna parte del cuerpo. ',
    ask:  '¿Ha sentido hormigueo en alguna parte del cuerpo?',
    url:  ''
  });
  Terminos.insert({
    name: 'Pentavalente',
    text: 'Vacuna contra Difteria, Tos ferina, Tétanos, Haemophilus y Hepatitis B.',
    ask:  '¿Le pusieron la vacuna pentavalente?',
    url:  ''
  });
  Terminos.insert({
    name: 'Percusión',
    text: '',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Pérdida de peso',
    text: 'Pérdida de 5% de masa corporal total en 6 meses.',
    ask:  '¿Ha notado que pierde peso involuntariamente?',
    url:  ''
  });
  Terminos.insert({
    name: 'Petequias',
    text: 'Lesiones puntiformes de color rojo por extravasación de eritrocitos al dañarse un capilar.',
    ask:  '¿Ha notado puntitos rojos en pies o manos?',
    url:  ''
  });
  Terminos.insert({
    name: 'Pigmentación',
    text: 'Coloración del cuerpo.',
    ask:  '¿Tiene manchas o zonas mas claras u obscuras?',
    url:  ''
  });
  Terminos.insert({
    name: 'Pirosis ',
    text: 'Sensación quemante en el trayecto esofágico, puede deberse a regurgitación de ácido gástrico.',
    ask:  '¿Ha tenido agruras?',
    url:  ''
  });
  Terminos.insert({
    name: 'Piuria',
    text: 'Pus en orina.',
    ask:  '¿Ha orinado pus?',
    url:  ''
  });
  Terminos.insert({
    name: 'Plejía',
    text: 'Parálisis total.',
    ask:  '¿Incapacidad para mover alguna parte de su cuerpo?',
    url:  ''
  });
  Terminos.insert({
    name: 'Polaquiuria',
    text: 'Aumento del número de micciones.',
    ask:  '¿Ha ido mas veces a orinar y hace "gotitas"?',
    url:  ''
  });
  Terminos.insert({
    name: 'Polidipsia',
    text: 'Ingesta excesiva de líquidos por aumento anormal de la sensación de sed.',
    ask:  '¿Ha estado tomando mas agua de lo que acostumbra?',
    url:  ''
  });
  Terminos.insert({
    name: 'Polifagia',
    text: 'Aumento anormal de la necesidad de comer.',
    ask:  '¿Ha tenido mas hambre de lo que acostumbra?',
    url:  ''
  });
  Terminos.insert({
    name: 'Poliuria',
    text: 'Aumento en el volumen urinario.',
    ask:  '¿Ha orinado mas veces de lo que acostumbra?',
    url:  ''
  });
  Terminos.insert({
    name: 'Polución nocturna',
    text: 'Expulsión involuntaria de semen al dormir.',
    ask:  '¿Tiene sueños húmedos?',
    url:  ''
  });
  Terminos.insert({
    name: 'Práctica sexual',
    text: 'Homosexual, Heterosexual o Bisexual.',
    ask:  '¿Homosexual o Heterosexual?',
    url:  ''
  });
  Terminos.insert({
    name: 'Priapismo',
    text: 'Erección continua y dolorosa no producida por estímulo sexual.',
    ask:  '¿Ha tenido una erección que le dure horas sin deberse a un estímulo sexual?',
    url:  ''
  });
  Terminos.insert({
    name: 'Prurito',
    text: 'Sensación de picor que evoca el deseo de rascarse.',
    ask:  '¿Ha tenido comezón?',
    url:  ''
  });
  Terminos.insert({
    name: 'Pujo ',
    text: 'Contracciones voluntaria o involuntarias del abdomen para expulsar orina o heces.',
    ask:  '¿Puja cuando va al baño?',
    url:  ''
  });
  Terminos.insert({
    name: 'Rectorragia',
    text: 'Pérdida de sangre roja o fresca a través del ano.',
    ask:  '¿Ha expulsado sangre roja cuando va al baño?',
    url:  ''
  });
  Terminos.insert({
    name: 'Reflejos cutaneos',
    text: 'Reflejos polisinápticos flexores. donde la piel es el receptor y el efector.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Reflejos osteotendinosos',
    text: 'Reflejo monosináptico donde la vía receptora es el huso neuromusucular y la viá efectora las astas anteriores de la médula que inervan al músculo.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Región inguinocrural',
    text: 'Región situada entre los siguientes límites anatómicos: Arriba - Pliegue inguinal Abajo - Línea de convergencia entre sartorio y aductor medio Medial - Línea vertical de la espina del pubis Lateral - Línea vertical de la espina iliaca anterosuperior',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Región precordial',
    text: 'Área donde re proyecta el corazón en la cara anterior del tórax.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Regurgitación',
    text: 'Regreso del alimento a través del esófago hasta la orofaringe.',
    ask:  '¿Se le regresa la comida?',
    url:  ''
  });
  Terminos.insert({
    name: 'Rinolalia',
    text: 'Alteración en la fonación por cambios nasales. "Voz Gangosa".',
    ask:  '¿Ha notado que su voz suena gangosa?',
    url:  ''
  });
  Terminos.insert({
    name: 'Rinorrea',
    text: 'Flujo abundante por la nariz.',
    ask:  '¿Le escurre la nariz?',
    url:  ''
  });
  Terminos.insert({
    name: 'Rumiación ',
    text: 'Paso de alimento previamente deglutido nuevamente hacia la boca.',
    ask:  '¿Se le regresa la comida al poco tiempo que lo trago?',
    url:  ''
  });
  Terminos.insert({
    name: 'Sabin',
    text: 'Vacuna contra la poliomielitis.',
    ask:  '¿Esta vacunada(o) contra la polio?',
    url:  ''
  });
  Terminos.insert({
    name: 'Secreción uretral',
    text: 'Salida involuntaria de  secreción a través del meato urinario. ',
    ask:  '¿Le ha salido líquido por la uretra diferente a la orina?',
    url:  ''
  });
  Terminos.insert({
    name: 'Semiología',
    text: 'Rama de la medicina que estudia los signos o síntomas de las enfermedades para llegar a un diagnóstico.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Sensación de cuerpo extraño en periné',
    text: 'Aumento de la sensibilidad o sensación de bulto o cuerpo extraño en el area perineal que se hace manifiesta al caminar o al realizar actividad física.',
    ask:  '¿Alguna molestia entre las piernas al caminar o realizar actividad física?',
    url:  ''
  });
  Terminos.insert({
    name: 'Sensación de liquido en el oído',
    text: '',
    ask:  '¿Siente que tiene líquido en el oído o que le presionan por dentro?',
    url:  ''
  });
  Terminos.insert({
    name: 'Sensibilidad  superficial',
    text: 'Sensibildiad táctil, térmica y dolorosa.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Sensibilidad profunda',
    text: 'Propiocepción, vibración, presión.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Sibilancias',
    text: 'Sonido que hace el aire al pasar por vías aéreas congestionadas.',
    ask:  '¿Cuándo mete/saca aire suena como un silbido?',
    url:  ''
  });
  Terminos.insert({
    name: 'Signo',
    text: 'Hallazgo objetivo y medible percibido por el examinador.',
    ask:  'Lo que el paciente ve o mide (temperatura = fiebre, midriasis, coluria)',
    url:  ''
  });
  Terminos.insert({
    name: 'Síncope',
    text: 'Pérdida brusca del conocimiento y del tono postural.',
    ask:  '¿Se ha desmayado?',
    url:  ''
  });
  Terminos.insert({
    name: 'Síntoma',
    text: 'ïndice subjetivo de una enfermedad como lo percibe el paciente.',
    ask:  'Lo que el paciente de cuenta (comezón, dolor inguinal, sed)',
    url:  ''
  });
  Terminos.insert({
    name: 'Taquicardia',
    text: 'Aumento de la frecuencia cardiaca por encima de 100 lmp.',
    ask:  '¿Se le acelera el corazón?',
    url:  ''
  });
  Terminos.insert({
    name: 'Taquisfigmia',
    text: 'Pulso rápido.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Temblores',
    text: 'Movimientos rítmicos, involuntarios, sin propósito y oscilatorios que resultan en una contracción alternante de grupos musculares opuestos.',
    ask:  '¿Ha experimentado temblores en brazos o piernas?',
    url:  ''
  });
  Terminos.insert({
    name: 'Tenesmo',
    text: 'Sensación de orinar o defecar pero sin conseguirlo.',
    ask:  '¿Cuándo orina o hace popo se queda con las ganas?',
    url:  ''
  });
  Terminos.insert({
    name: 'Terapéutica',
    text: 'Cualquier medio que ayude a curar o aliviar alguna enfermedad.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Terrores nocturnos',
    text: 'Trastorno en el cual la persona se despierta rápidamente de un sueño en estado aterrorizado.',
    ask:  '¿Ha tenido pesadillas?',
    url:  ''
  });
  Terminos.insert({
    name: 'Tics',
    text: 'Movimientos involuntarios y sin motivo aparente, convulsivos, inoportunos, excesivos y que voluntariamente desaparecen por un momento o el distraerse el paciente.',
    ask:  '¿Tiene tics?',
    url:  ''
  });
  Terminos.insert({
    name: 'Tiempo libre',
    text: 'Indagar a que dedica su tiempo libre e identificar posibles factores de riesgo tales como pescar o búsqueda de tesoros.',
    ask:  '¿A qué dedica su tiempo libre?',
    url:  ''
  });
  Terminos.insert({
    name: 'Tinitus',
    text: 'Percibir un sonido metálico que no esta en el ambiente.',
    ask:  '¿Ha notado un "piiiii" en los oídos?',
    url:  ''
  });
  Terminos.insert({
    name: 'Tono',
    text: 'Contracción parcial, pasiva y continua de los músculos.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Tos',
    text: 'Liberación violenta del aire pulmonar por contracción de la cavidad torácica.',
    ask:  '¿Tiene o ha tenido tos?',
    url:  ''
  });
  Terminos.insert({
    name: 'Trastornos de erección',
    text: 'Incapacidad para mantener una erección.',
    ask:  '¿Algún trastorno de erección?',
    url:  ''
  });
  Terminos.insert({
    name: 'Tristeza',
    text: 'Sentimiento producido por un suceso desfavorable que suele manifestarse con un estado de ánimo pesimista, la insatisfacción y la tendencia al llanto.',
    ask:  '¿Se ha sentido triste últimamente?',
    url:  ''
  });
  Terminos.insert({
    name: 'Uñas',
    text: '¿Implantación? ¿Coloración? ¿Quebradizas? ¿Líneas? Infección?',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Urgencia',
    text: 'Deseo súbito intenso de orinar.',
    ask:  '¿Ha sentido una necesidad inmediata de orinar?',
    url:  ''
  });
  Terminos.insert({
    name: 'V.S.G',
    text: 'Velocidad de Sedimentación Globular, sugiere algún proceso infeccioso.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'VDRL',
    text: 'Venereal Disease Research Laboratory, prueba serológica para detectar sífilis.',
    ask:  '',
    url:  ''
  });
  Terminos.insert({
    name: 'Vértigo',
    text: 'Sensación de que los objetos están girando alrededor de la persona.',
    ask:  '¿Siente que los objetos le dan vueltas?',
    url:  'Vómica'
  });
  Terminos.insert({
    name: 'Xerodermia',
    text: 'Trastorno cutáneo crónico caracterizado por sequedad y aspereza de la piel.',
    ask:  '¿Sensación de piel seca?',
    url:  ''
  });
  console.log(Terminos);
}