export type LanguageCode = 'pt' | 'en' | 'es' | 'fr' | 'it' | 'zh' | 'ko';

export interface LanguageInfo {
  code: LanguageCode;
  label: string;
}

// Rótulos traduzidos para o português conforme solicitado
export const LANGUAGES: LanguageInfo[] = [
  { code: 'pt', label: 'Português' },
  { code: 'en', label: 'Inglês' },
  { code: 'es', label: 'Espanhol' },
  { code: 'fr', label: 'Francês' },
  { code: 'it', label: 'Italiano' },
  { code: 'zh', label: 'Chinês' },
  { code: 'ko', label: 'Coreano' }
];

export const translations: Record<LanguageCode, any> = {
  pt: {
    navbar: {
      contact: 'CONTATO',
      support: 'APOIAR',
      home: 'Home',
      story: 'A História',
      soundid: 'Sound ID',
      resources: 'Recursos',
      download: 'Download'
    },
    hero: {
      headline: 'A voz dos anfíbios | revelada pela ciência cidadã',
      subheadline: 'Grave cantos, mapeie biomas brasileiros e ajude cientistas a catalogar a herpetologia do nosso país diretamente pelo seu smartphone.',
      cta: 'Baixar Ribbit App 🐸',
      secondary: 'Ver Interfaces'
    },
    carousel: {
      tag: 'Galeria do App',
      title: 'Conheça a interface do Ribbit',
      subtitle: 'Explore as principais telas desenvolvidas sob a estética de alto contraste do design system.',
      slides: [
        { title: 'Painel Inicial', description: 'Acompanhe as últimas descobertas de anfíbios e notícias científicas da comunidade.' },
        { title: 'Sound ID', description: 'Grave o canto e compare a assinatura bioacústica do anfíbio em tempo real.' },
        { title: 'Explorar Regiões', description: 'Consulte o catálogo de espécies organizado por biomas brasileiros.' },
        { title: 'Assistente Geográfico', description: 'Identifique anfíbios por morfologia e habitat através de filtragem offline.' },
        { title: 'Chat Científico', description: 'Conecte-se com biólogos e herpetólogos para tirar dúvidas taxonômicas.' }
      ]
    },
    tech: {
      tag: 'Tecnologia Bioacústica',
      title: 'Identifique Cantos e Coaxares de Anfíbios',
      desc1: 'O Sound ID escuta os anfíbios ao seu redor e mostra sugestões em tempo real de quem está cantando. Compare a sua gravação com os coaxares catalogados no Ribbit para confirmar o que você ouviu. O Sound ID funciona completamente offline, permitindo identificar anfíbios no campo, não importa onde você esteja.',
      desc2: 'Disponível para centenas de espécies na Mata Atlântica, Cerrado, Amazônia e outros biomas nacionais. Mais espécies e gravações validadas são adicionadas constantemente pela comunidade herpetológica brasileira.',
      btn: 'Mais sobre o Sound ID',
      badge1: 'Sound ID Offline',
      badge2: 'Guia Morfológico',
      badge3: 'Aprovação em Campo'
    },
    chat: {
      title: 'Conecte-se com a Comunidade Científica',
      desc1: 'O Chat Científico integrado conecta observadores de campo e pesquisadores em tempo real. Compartilhe suas fotos e gravações de áudio diretamente com biólogos especialistas para obter suporte imediato na classificação taxonômica e validar novos registros.',
      desc2: 'Participe de grupos de discussão focados nos biomas brasileiros, colabore no mapeamento geográfico de espécies em perigo de extinção e expanda seus conhecimentos sobre a herpetologia nacional.',
      btn: 'Conhecer a Comunidade'
    },
    explore: {
      title: 'Explore Espécies por Região e Bioma',
      desc1: 'O catálogo do Explorar permite que você descubra os anfíbios nativos de cada região do Brasil. Filtre os registros por biomas como Mata Atlântica, Cerrado ou Amazônia e consulte mapas de distribuição geográfica para entender exatamente a origem de cada espécie.',
      desc2: 'Dúvidas na identificação? O Assistente Guiado faz perguntas morfológicas rápidas sobre o bioma, comportamento e tipo de canto, cruzando dados geográficos locais para listar as espécies com maior probabilidade de ocorrência na sua área.',
      btn: 'Explorar Biomas'
    },
    footer: {
      desc: 'O Ribbit é um projeto de ciência cidadã voltado para o mapeamento bioacústico e conservação herpetológica de anfíbios brasileiros. Conectamos entusiastas e cientistas.',
      col1: 'Navegação',
      col2: 'Ciência & Dados',
      col3: 'Disponível para Download',
      terms: 'Termos de Uso',
      privacy: 'Privacidade',
      security: 'Segurança de Dados',
      copyright: '© 2026 Ribbit Project. Inspirado no Merlin Bird ID. Desenvolvido para catalogação científica.'
    }
  },
  en: {
    navbar: {
      contact: 'CONTACT',
      support: 'SUPPORT',
      home: 'Home',
      story: 'History',
      soundid: 'Sound ID',
      resources: 'Resources',
      download: 'Download'
    },
    hero: {
      headline: 'The voice of amphibians | revealed by citizen science',
      subheadline: 'Record calls, map Brazilian biomes, and help scientists catalog our country\'s herpetology directly from your smartphone.',
      cta: 'Download Ribbit App 🐸',
      secondary: 'View Interfaces'
    },
    carousel: {
      tag: 'App Gallery',
      title: 'Explore the Ribbit Interface',
      subtitle: 'Discover the main screens designed under the high-contrast aesthetics of our design system.',
      slides: [
        { title: 'Dashboard', description: 'Follow the latest amphibian discoveries and scientific news from the community.' },
        { title: 'Sound ID', description: 'Record calls and compare the bioacoustic signature of the amphibian in real-time.' },
        { title: 'Explore Regions', description: 'Browse the species catalog organized by Brazilian biomes.' },
        { title: 'Geographic Wizard', description: 'Identify amphibians by morphology and habitat using offline filters.' },
        { title: 'Scientific Chat', description: 'Connect with biologists and herpetologists to resolve taxonomic questions.' }
      ]
    },
    tech: {
      tag: 'Bioacoustic Technology',
      title: 'Identify Amphibian Calls and Vocalizations',
      desc1: 'Sound ID listens to the amphibians around you and shows real-time suggestions of who is singing. Compare your recording to the cataloged calls in Ribbit to confirm what you heard. Sound ID works completely offline, allowing you to identify amphibians in the field, no matter where you are.',
      desc2: 'Available for hundreds of species in the Atlantic Forest, Cerrado, Amazon, and other national biomes. More species and validated recordings are constantly added by the Brazilian herpetological community.',
      btn: 'More about Sound ID',
      badge1: 'Offline Sound ID',
      badge2: 'Morphological Guide',
      badge3: 'Field Approved'
    },
    chat: {
      title: 'Connect with the Scientific Community',
      desc1: 'The integrated Scientific Chat connects field observers and researchers in real-time. Share your photos and audio recordings directly with expert biologists to get immediate support in taxonomic classification and validate new records.',
      desc2: 'Participate in discussion groups focused on Brazilian biomes, collaborate on mapping endangered species, and expand your knowledge about national herpetology.',
      btn: 'Join the Community'
    },
    explore: {
      title: 'Explore Species by Region and Biome',
      desc1: 'The Explore catalog allows you to discover native amphibians in each region of Brazil. Filter records by biomes such as Atlantic Forest, Cerrado, or Amazon, and check geographical maps to understand the exact origin of each species.',
      desc2: 'Questions about identification? The Guided Assistant asks quick morphological questions about the biome, behavior, and call type, crossing local geographical data to list the species most likely to occur in your area.',
      btn: 'Explore Biomes'
    },
    footer: {
      desc: 'Ribbit is a citizen science project aimed at bioacoustic mapping and herpetological conservation of Brazilian amphibians. We connect enthusiasts and scientists.',
      col1: 'Navigation',
      col2: 'Science & Data',
      col3: 'Available for Download',
      terms: 'Terms of Use',
      privacy: 'Privacy',
      security: 'Data Security',
      copyright: '© 2026 Ribbit Project. Inspired by Merlin Bird ID. Developed for scientific cataloging.'
    }
  },
  es: {
    navbar: {
      contact: 'CONTACTO',
      support: 'APOYAR',
      home: 'Inicio',
      story: 'La Historia',
      soundid: 'Sound ID',
      resources: 'Recursos',
      download: 'Descargar'
    },
    hero: {
      headline: 'La voz de los anfibios | revelada por la ciencia ciudadana',
      subheadline: 'Grabe cantos, mapee biomas brasileños y ayude a los científicos a catalogar la herpetología de nuestro país directamente desde su teléfono inteligente.',
      cta: 'Descargar Ribbit App 🐸',
      secondary: 'Ver Interfaces'
    },
    carousel: {
      tag: 'Galería de la App',
      title: 'Conozca la interfaz de Ribbit',
      subtitle: 'Explore las principales pantallas desarrolladas bajo la estética de alto contraste del sistema de diseño.',
      slides: [
        { title: 'Panel Inicial', description: 'Siga los últimos descubrimientos de anfibios y noticias científicas de la comunidad.' },
        { title: 'Sound ID', description: 'Grabe el canto y compare la firma bioacústica del anfibio en tiempo real.' },
        { title: 'Explorar Regiones', description: 'Consulte el catálogo de especies organizado por biomas brasileños.' },
        { title: 'Asistente Geográfico', description: 'Identifique anfibios por morfología y hábitat mediante filtrado offline.' },
        { title: 'Chat Científico', description: 'Conéctese con biólogos y herpetólogos para resolver dudas taxonómicas.' }
      ]
    },
    tech: {
      tag: 'Tecnología Bioacústica',
      title: 'Identifique Cantos y Coaxares de Anfibios',
      desc1: 'Sound ID escucha los anfibios a su alrededor y muestra sugerencias en tiempo real de quién está cantando. Compare su grabación con los coaxares catalogados en Ribbit para confirmar lo que escuchó. Sound ID funciona completamente offline, lo que permite identificar anfibios en el campo, sin importar dónde se encuentre.',
      desc2: 'Disponible para cientos de especies en la Mata Atlántica, Cerrado, Amazonía y otros biomas nacionales. La comunidad herpetológica brasileña añade constantemente más especies y grabaciones validadas.',
      btn: 'Más sobre Sound ID',
      badge1: 'Sound ID offline',
      badge2: 'Guía morfológica',
      badge3: 'Aprobado en campo'
    },
    chat: {
      title: 'Conéctese con la Comunidad Científica',
      desc1: 'El Chat Científico integrado conecta a observadores de campo y científicos en tiempo real. Comparta sus fotos y grabaciones de audio directamente con biólogos expertos para obtener soporte inmediato en la clasificación taxonómica y validar nuevos registros.',
      desc2: 'Participe en grupos de discusión enfocados en biomas brasileños, colabore en el mapeo de especies en peligro y expanda sus conocimientos sobre la herpetología nacional.',
      btn: 'Conocer la Comunidad'
    },
    explore: {
      title: 'Explore Especies por Región y Bioma',
      desc1: 'El catálogo Explorar le permite descubrir anfibios nativos de cada región de Brasil. Filtre registros por biomas como Mata Atlántica, Cerrado o Amazonía y consulte mapas de distribución para conocer el origen exacto de cada especie.',
      desc2: '¿Dudas con la identificación? El Asistente Guiado realiza preguntas morfológicas rápidas sobre el bioma, comportamiento y tipo de canto, cruzando datos geográficos locales para listar las especies más probables de su área.',
      btn: 'Explorar Biomas'
    },
    footer: {
      desc: 'Ribbit es un proyecto de ciencia ciudadana enfocado en el mapeo bioacústico y la conservación herpetológica de anfibios brasileños. Conectamos entusiastas y científicos.',
      col1: 'Navegación',
      col2: 'Ciencia & Datos',
      col3: 'Disponible para Descargar',
      terms: 'Términos de Uso',
      privacy: 'Privacidad',
      security: 'Seguridad de Datos',
      copyright: '© 2026 Ribbit Project. Inspirado en Merlin Bird ID. Desarrollado para catalogación científica.'
    }
  },
  fr: {
    navbar: {
      contact: 'CONTACT',
      support: 'SOUTENIR',
      home: 'Accueil',
      story: 'L’Histoire',
      soundid: 'Sound ID',
      resources: 'Ressources',
      download: 'Télécharger'
    },
    hero: {
      headline: 'La voix des amphibiens | révélée par la science citoyenne',
      subheadline: 'Enregistrez des chants, cartographiez les biomes brésiliens et aidez les scientifiques à cataloguer l’herpétologie de notre pays directement depuis votre smartphone.',
      cta: 'Télécharger Ribbit App 🐸',
      secondary: 'Voir Interfaces'
    },
    carousel: {
      tag: 'Galerie de l’App',
      title: 'Découvrez l’interface Ribbit',
      subtitle: 'Explorez les principaux écrans développés sous l’esthétique à haut contraste du temps du système de conception.',
      slides: [
        { title: 'Tableau de bord', description: 'Suivez les dernières découvertes d’amphibiens et les actualités scientifiques de la communauté.' },
        { title: 'Sound ID', description: 'Enregistrez le chant et comparez la signature bioacoustique de l’amphibien en temps réel.' },
        { title: 'Explorer les régions', description: 'Consultez le catalogue d’espèces organisé par biomes brésiliens.' },
        { title: 'Assistant géographique', description: 'Identifiez les amphibiens par morphologie et habitat grâce au filtrage hors ligne.' },
        { title: 'Chat scientifique', description: 'Connectez-vous avec des biologistes et herpétologues pour résoudre des questions taxonomiques.' }
      ]
    },
    tech: {
      tag: 'Technologie bioacoustique',
      title: 'Identifiez les chants et vocalisations d’amphibiens',
      desc1: 'Sound ID écoute les amphibiens autour de vous et propose des suggestions en temps réel sur l’identité du chanteur. Comparez votre enregistrement aux chants répertoriés dans Ribbit pour confirmer ce que vous avez entendu. Sound ID fonctionne entièrement hors ligne, vous permettant d’identifier les amphibiens sur le terrain, où que vous soyez.',
      desc2: 'Disponible pour des centaines d’espèces de la forêt atlantique, du Cerrado, de l’Amazonie et d’autres biomes nationaux. De nouvelles espèces et des enregistrements validés sont constamment ajoutés par la communauté herpétologique brésilienne.',
      btn: 'En savoir plus sur Sound ID',
      badge1: 'Sound ID hors ligne',
      badge2: 'Guide morphologique',
      badge3: 'Approuvé sur le terrain'
    },
    chat: {
      title: 'Connectez-vous avec la communauté scientifique',
      desc1: 'Le Chat scientifique intégré connecte en temps réel les observateurs sur le terrain et les chercheurs. Partagez vos photos et enregistrements audio directement avec des biologistes experts pour obtenir une aide immédiate à la classification taxonomique et valider de nouvelles données.',
      desc2: 'Participez à des groupes de discussion axés sur les biomes brésiliens, collaborez à la cartographie des espèces menacées et approfondissez vos connaissances en herpétologie nationale.',
      btn: 'Rejoindre la communauté'
    },
    explore: {
      title: 'Explorez les espèces par région et biome',
      desc1: 'Le catalogue Explorer vous permet de découvrir les amphibiens natifs de chaque région du Brésil. Filtrez les observations par biomes comme la forêt atlantique, le Cerrado ou l’Amazonie et consultez des cartes de répartition pour comprendre l’origine exacte de chaque espèce.',
      desc2: 'Des doutes sur l’identification ? L’Assistant guidé pose des questions morphologiques rapides sur le biome, le comportement et le type de chant, croisant les données géographiques locales pour lister les espèces les plus susceptibles de se trouver dans votre zone.',
      btn: 'Explorer les biomes'
    },
    footer: {
      desc: 'Ribbit est un projet de science citoyenne visant la cartographie bioacoustique et la conservation herpétologique des amphibiens brésiliens. Nous connectons passionnés et scientifiques.',
      col1: 'Navigation',
      col2: 'Science & Données',
      col3: 'Disponible en téléchargement',
      terms: 'Conditions d’utilisation',
      privacy: 'Confidentialité',
      security: 'Sécurité des données',
      copyright: '© 2026 Projet Ribbit. Inspiré par Merlin Bird ID. Développé pour le catalogage scientifique.'
    }
  },
  it: {
    navbar: {
      contact: 'CONTATTO',
      support: 'SUPPORTARE',
      home: 'Home',
      story: 'La Storia',
      soundid: 'Sound ID',
      resources: 'Risorse',
      download: 'Scarica'
    },
    hero: {
      headline: 'La voce degli anfibi | svelata dalla scienza cittadina',
      subheadline: 'Registra canti, mappa i biomi brasiliani e aiuta gli scienziati a catalogare l\'erpetologia del nostro paese direttamente dal tuo smartphone.',
      cta: 'Scarica Ribbit App 🐸',
      secondary: 'Vedi Interfacce'
    },
    carousel: {
      tag: 'Galleria dell’App',
      title: 'Esplora l’interfaccia Ribbit',
      subtitle: 'Scopri le schermate principali progettate sotto l’estetica ad alto contrasto del sistema di progettazione.',
      slides: [
        { title: 'Dashboard', description: 'Segui le ultime scoperte di anfibi e le novità scientifiche della comunità.' },
        { title: 'Sound ID', description: 'Registra il canto e confronta la firma bioacustica dell’anfibi in tempo reale.' },
        { title: 'Esplora Regioni', description: 'Consulta il catalogo delle specie organizzato per biomi brasiliani.' },
        { title: 'Assistente Geografico', description: 'Identifica gli anfibi per morfologia e habitat tramite filtraggio offline.' },
        { title: 'Chat Scientifica', description: 'Connettiti con biologi ed erpetologi per risolvere dubbi tassonomici.' }
      ]
    },
    tech: {
      tag: 'Tecnologia Bioacustica',
      title: 'Identifica Canti e Vocalizzazioni di Anfibi',
      desc1: 'Sound ID ascolta gli anfibi intorno a te e mostra suggerimenti in tempo reale su chi sta cantando. Confronta la tua registrazione con i canti catalogati in Ribbit per confermare ciò che hai sentito. Sound ID funziona completamente offline, consentendoti di identificare gli anfibi sul campo, ovunque tu sia.',
      desc2: 'Disponibile per centinaia di specie nella Foresta Atlantica, nel Cerrado, in Amazzonia e in altri biomi nazionali. Ulteriori specie e registrazioni validate vengono costantemente aggiunte dalla comunità erpetologica brasiliana.',
      btn: 'Altro su Sound ID',
      badge1: 'Sound ID offline',
      badge2: 'Guida morfologica',
      badge3: 'Approvato sul campo'
    },
    chat: {
      title: 'Connettiti con la Comunità Scientifica',
      desc1: 'La Chat Scientifica integrata connette osservatori sul campo e ricercatori in tempo reale. Condividi foto e registrazioni audio direttamente con biologi esperti per ricevere supporto immediato nella classificazione tassonomica e convalidare nuovi record.',
      desc2: 'Partecipa a gruppi di discussione focalizzati sui biomi brasiliani, collabora alla mappatura delle specie a rischio ed espandi le tue conoscenze sull\'erpetologia nazionale.',
      btn: 'Conosci la Comunità'
    },
    explore: {
      title: 'Esplora le Specie per Regione e Bioma',
      desc1: 'Il catalogo Esplora ti consente di scoprire anfibi nativi in ogni regione del Brasile. Filtra le osservazioni per biomi come la Foresta Atlantica, il Cerrado o l\'Amazzonia e controlla le mappe geografiche per comprendere l\'origine esatta di ciascuna specie.',
      desc2: 'Dubbi sull\'identificazione? L\'Assistente guidato pone domande morfologiche rapide su bioma, comportamento e tipo di canto, incrociando i dati geografici locali per elencare le specie che hanno maggiore probabilità di essere presenti nella tua area.',
      btn: 'Esplora i Biomi'
    },
    footer: {
      desc: 'Ribbit è un progetto di scienza cittadina finalizzato alla mappatura bioacustica e alla conservazione erpetologica degli anfibi brasiliani. Connettiamo appassionati e scienziati.',
      col1: 'Navigazione',
      col2: 'Scienza & Dati',
      col3: 'Disponibile per il Download',
      terms: 'Condizioni d’uso',
      privacy: 'Privacy',
      security: 'Sicurezza dei dati',
      copyright: '© 2026 Progetto Ribbit. Ispirato a Merlin Bird ID. Sviluppato per la catalogazione scientifica.'
    }
  },
  zh: {
    navbar: {
      contact: '联系我们',
      support: '支持项目',
      home: '首页',
      story: '项目故事',
      soundid: 'Sound ID',
      resources: '核心功能',
      download: '下载应用'
    },
    hero: {
      headline: '公众科学 | 揭示两栖动物的声音',
      subheadline: '直接通过您的智能手机录制鸣声、绘制巴西生物群落图，并帮助科学家对我国的两栖爬行动物进行编目。',
      cta: '下载 Ribbit App 🐸',
      secondary: '查看界面'
    },
    carousel: {
      tag: '应用图库',
      title: '了解 Ribbit 界面',
      subtitle: '探索在设计系统的高对比度美学下开发的核心屏幕。',
      slides: [
        { title: '控制面板', description: '关注社区最新发现的两栖动物 and 科学动态。' },
        { title: 'Sound ID', description: '录制鸣声并实时对比两栖动物的生物声学特征。' },
        { title: '探索区域', description: '查看按巴西生物群落分类的物种目录。' },
        { title: '地理助手', description: '通过离线问答筛选，结合形态和栖息地识别两栖动物。' },
        { title: '学术交流', description: '与生物学家和两栖爬行动物学家取得联系，解答分类学疑问。' }
      ]
    },
    tech: {
      tag: '生物声学技术',
      title: '识别两栖动物的鸣声与叫声',
      desc1: 'Sound ID 能够聆听您周围的两栖动物，并实时提供叫声物种建议。将您的录音与 Ribbit 中已归档的叫声进行比对，以确认您的所听。Sound ID 完全支持离线工作，让您无论身在野外何处都能随时识别。',
      desc2: '适用于大西洋雨林、塞拉多、亚马逊及其他国家生物群落的数百种物种。巴西两栖爬行动物学界正不断添加更多物种和经过验证的录音。',
      btn: '了解更多 Sound ID 功能',
      badge1: '离线 Sound ID',
      badge2: '形态指南',
      badge3: '野外认证'
    },
    chat: {
      title: '与科学界建立联系',
      desc1: '集成的学术交流聊天功能将野外观察者与研究人员实时联系起来。直接向专业生物学家分享您的照片和录音，以获得分类学上的即时支持并验证新的学术记录。',
      desc2: '参与专注于巴西生物群落的小组讨论，协助绘制管状或濒危物种的地理分布图，并拓宽您在国家两栖爬行动物学方面的知识。',
      btn: '加入科学社区'
    },
    explore: {
      title: '按区域和生物群落探索物种',
      desc1: '“探索”目录可让您发现巴西每个区域的本土两栖动物。按大西洋雨林、塞拉多或亚马逊等生物群落过滤记录，并查阅地理分布图以准确了解每种两栖动物的分布源头。',
      desc2: '对物种鉴定有疑问？“引导式助手”会针对观察点的生物群落、行为和鸣声类型提出快速形态学问题，结合当地地理数据筛选出您所在区域最可能出现的物种。',
      btn: '探索生物群落'
    },
    footer: {
      desc: 'Ribbit 是一个旨在对巴西两栖动物进行生物声学制图和两栖爬行类保护的公众科学项目。我们连接爱好者和科学家。',
      col1: '导航',
      col2: '科学与数据',
      col3: '可供下载',
      terms: '使用条款',
      privacy: '隐私政策',
      security: '数据安全',
      copyright: '© 2026 Ribbit 项目。灵感来自 Merlin Bird ID。为科学编目而开发。'
    }
  },
  ko: {
    navbar: {
      contact: '문의하기',
      support: '후원하기',
      home: '홈',
      story: '스토리',
      soundid: 'Sound ID',
      resources: '주요 기능',
      download: '다운로드'
    },
    hero: {
      headline: '시민 과학이 밝혀내는 | 양서류의 목소리',
      subheadline: '스마트폰을 통해 울음소리를 녹음하고, 브라질의 생물군계를 매핑하며, 과학자들이 우리나라의 양서류를 분류할 수 있도록 직접 도와주세요.',
      cta: 'Ribbit 앱 다운로드 🐸',
      secondary: '인터페이스 보기'
    },
    carousel: {
      tag: '앱 갤러리',
      title: 'Ribbit 인터페이스 소개',
      subtitle: '디자인 시스템의 고대비 미학을 반영하여 개발된 핵심 화면들을 살펴보세요.',
      slides: [
        { title: '초기 대시보드', description: '커뮤니티의 최신 양서류 발견 정보와 과학 뉴스를 확인하세요.' },
        { title: 'Sound ID', description: '울음소리를 녹음하고 실시간으로 양서류의 바이오어쿠스틱 서명을 분석하세요.' },
        { title: '지역별 탐색', description: '브라질의 생물군계별로 정리된 양서류 목록을 탐색하세요.' },
        { title: '형태학적 조수', description: '오프라인 문답 필터링을 통해 형태와 서식지 기반으로 양서류를 식별하세요.' },
        { title: '과학적 채팅', description: '생물학자 및 양서류 학자들과 소통하여 분류학적 의문을 해결하세요.' }
      ]
    },
    tech: {
      tag: '바이오어쿠스틱 기술',
      title: '양서류 울음소리 및 소리 식별',
      desc1: 'Sound ID는 주변의 양서류 소리를 듣고 현재 우는 종에 대한 실시간 제안을 보여줍니다. 녹음한 소리를 Ribbit에 등록된 울음소리와 비교하여 확인해보세요. Sound ID는 완전히 오프라인으로 작동하므로 현장 어디서나 식별할 수 있습니다.',
      desc2: '대서양림, 세하두, 아마존 및 기타 브라질 생물군계의 수백 가지 종에 적용됩니다. 브라질 양서류 연구진이 더 많은 종과 검증된 데이터를 지속적으로 업데이트하고 있습니다.',
      btn: 'Sound ID 자세히 보기',
      badge1: '오프라인 Sound ID',
      badge2: '형태학 가이드',
      badge3: '현장 실사 인증'
    },
    chat: {
      title: '과학계 커뮤니티와 연결하세요',
      desc1: '통합된 과학 채팅을 통해 야외 관찰자와 연구자가 실시간으로 연결됩니다. 촬영한 사진과 녹음 파일을 생물학자들에게 공유하여 즉각적인 분류학 지원을 받고 새로운 관찰 기록을 검증받으세요.',
      desc2: '브라질 생물군계에 초점을 맞춘 토론 그룹에 참여하고, 멸종 위기종의 지리적 분포를 지도화하는 데 협력하며, 국가 양서류 연구 지식을 넓혀가세요.',
      btn: '커뮤니티 알아보기'
    },
    explore: {
      title: '지역 및 생물군계별 양서류 탐색',
      desc1: '탐색 카탈로그를 활용하면 브라질 각 지역의 고유 양서류를 발견할 수 있습니다. 대서양림, 세하두, 아마존 등의 생물군계로 관찰 기록을 필터링하고 지리적 분포 지도를 보며 각 종의 명확한 기원을 이해하세요.',
      desc2: '종 식별이 어려우신가요? 가이드가 포함된 형태 조수가 서식지, 행동, 울음소리 유형에 대한 간단한 질문을 던져 현지 지리 데이터와 결합하여 해당 지역에 서식할 확률이 가장 높은 양서류 목록을 좁혀줍니다.',
      btn: '생물군계 탐색'
    },
    footer: {
      desc: 'Ribbit은 브라질 양서류의 바이오어쿠스틱 매핑 및 보존을 목표로 하는 시민 과학 프로젝트입니다. 아마추어 동호인과 과학자들을 연결합니다.',
      col1: '메뉴',
      col2: '과학 & 데이터',
      col3: '다운로드 지원',
      terms: '이용 약관',
      privacy: '개인정보 처리방침',
      security: '데이터 보안',
      copyright: '© 2026 Ribbit 프로젝트. Merlin Bird ID 영감. 과학적 목록 편찬을 위해 개발되었습니다.'
    }
  }
};
