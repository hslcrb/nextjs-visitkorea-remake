export interface Destination {
  id: string
  name: string
  nameEn: string
  location: string
  description: string
  image: string
  tag: string
  history: string
  highlights: string[]
  bestTime: string
  howToGet: string
  tip: string
  nearby: { name: string; id: string }[]
  gallery: string[]
  weather: string
  rating: number
  reviewCount: number
}

export interface FoodItem {
  id: string
  name: string
  nameEn: string
  description: string
  image: string
  tag: string
  region: string
  history: string
}

export interface CultureItem {
  id: string
  name: string
  nameEn: string
  description: string
  image: string
  history: string
}

export const heroSlides = [
  {
    id: 'slide-1',
    image: 'https://images.unsplash.com/photo-1586611240295-2f0f7e11f0c7?w=1920&q=85',
    title: '오천년의 숨결,\n새로운 발견',
    subtitle: '고궁에서 현대까지, 한국의 모든 매력을 만나다',
  },
  {
    id: 'slide-2',
    image: 'https://images.unsplash.com/photo-1619948549671-e0ee0ecdb927?w=1920&q=85',
    title: '자연이 빚은\n예술의 섬',
    subtitle: '제주도의 신비로운 풍경이 당신을 기다립니다',
  },
  {
    id: 'slide-3',
    image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=1920&q=85',
    title: '역사와 미래가\n공존하는 도시',
    subtitle: '부산의 다이내믹한 에너지를 느껴보세요',
  },
  {
    id: 'slide-4',
    image: 'https://images.unsplash.com/photo-1586843875872-2b8f52b8c1f0?w=1920&q=85',
    title: '밤에도 쉬지 않는\n매력의 도시',
    subtitle: '서울의 화려한 야경이 펼쳐집니다',
  },
  {
    id: 'slide-5',
    image: 'https://images.unsplash.com/photo-1597088758740-56eb7eb0a2f7?w=1920&q=85',
    title: '사계절이\n선물하는 풍경',
    subtitle: '봄의 벚꽃부터 겨울의 설경까지',
  },
]

export const destinations: Destination[] = [
  {
    id: 'gyeongbokgung',
    name: '경복궁',
    nameEn: 'Gyeongbokgung Palace',
    location: '서울 종로구',
    description: '조선 왕조의 으뜸 궁궐, 경복궁. 근정전과 경회루가 펼치는 웅장한 역사의 장면 속으로 초대합니다.',
    image: 'https://images.unsplash.com/photo-1586611240295-2f0f7e11f0c7?w=800&q=80',
    tag: '역사',
    history: "조선 태조 4년(1395)에 창건된 경복궁은 조선 왕조의 법궁(法宮)으로, '경복'은 '큰 복'을 의미합니다. 임진왜란으로 소실되었다가 흥선대원군 주도로 중건되었으며, 근정전, 경회루, 향원정 등 웅장한 건축물이 조화를 이룹니다. 일제강점기와 한국전쟁을 겪으며 많은 건물이 훼손되었으나, 1990년대부터 지속적인 복원 사업이 진행되어 현재의 모습을 되찾았습니다.",
    highlights: [
      '근정전 — 국보 제223호, 조선 왕조의 법전(法殿)',
      '경회루 — 연회와 사신 접견을 위한 누각',
      '향원정 — 왕실의 휴식 공간이었던 정자',
      '수문장 교대의식 — 전통 의례 재현',
      '국립민속박물관 — 궁궐 내 위치한 문화 공간',
      '한복 대여 — 궁궐과 어우러지는 특별한 경험',
    ],
    bestTime: '3~5월 (봄, 벚꽃과 궁궐의 조화), 9~11월 (가을, 단풍과 고궁의 아름다움)',
    howToGet: '지하철 3호선 경복궁역 4번 출구에서 도보 5분. 또는 5호선 광화문역 2번 출구에서 도보 10분.',
    tip: '매주 화요일은 휴궁일이므로 방문에 유의하세요. 수문장 교대의식은 하루 3회(10시, 13시, 15시) 진행됩니다. 전통 한복을 대여하면 무료 입장이 가능합니다.',
    nearby: [
      { name: '북촌한옥마을', id: 'bukchon' },
      { name: '인사동', id: 'insadong' },
      { name: '광화문광장', id: 'gwanghwamun' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1586611240295-2f0f7e11f0c7?w=1200&q=85',
      'https://images.unsplash.com/photo-1590933037568-f2f0d1e0a0b0?w=1200&q=85',
      'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=1200&q=85',
      'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=1200&q=85',
    ],
    weather: '서울은 사계절이 뚜렷합니다. 여름(25~30°C)은 덥고 습하며, 겨울(-5~2°C)은 건조하고 춥습니다. 봄과 가을이 방문하기 가장 좋은 계절입니다.',
    rating: 4.8,
    reviewCount: 28431,
  },
  {
    id: 'jeju',
    name: '제주도',
    nameEn: 'Jeju Island',
    location: '제주특별자치도',
    description: '한라산, 성산일출봉, 협재해변까지. 유네스코 삼관왕 제주도의 경이로운 자연을 만끽하세요.',
    image: 'https://images.unsplash.com/photo-1619948549671-e0ee0ecdb927?w=800&q=80',
    tag: '자연',
    history: '제주도는 약 180만 년 전 한라산의 화산 활동으로 형성된 화산섬입니다. 유네스코 세계자연유산, 세계지질공원, 생물권보전지역으로 지정된 유일무이한 지역으로, 곶자왈, 오름, 용암동굴 등 독특한 지형을 자랑합니다. 탐라국 시대부터 독자적인 문화를 발전시켜 온 제주는 해녀 문화, 돌하르방, 제주어 등 고유한 유산을 간직하고 있습니다.',
    highlights: [
      '한라산 국립공원 — 대한민국 최고봉(1950m)',
      '성산일출봉 — 유네스코 세계자연유산',
      '만장굴 — 세계적으로 유명한 용암동굴',
      '우도 — 제주 동쪽의 아름다운 부속섬',
      '해녀 체험 — 유네스코 무형문화유산',
      '제주 올레길 — 26개 코스의 트레킹 명소',
    ],
    bestTime: '4~6월 (봄꽃과 푸른 바다), 9~11월 (가을, 한라산 단풍과 온화한 날씨)',
    howToGet: '김포/인천/김해공항에서 제주국제공항까지 비행기 1시간. 부산에서 여객선 3~4시간.',
    tip: '렌터카가 가장 편리한 이동 수단입니다. 제주도는 일출 명소가 많아 성산일출봉이나 우도에서 일출을 감상하는 것을 추천합니다. 우천 시에는 한라산 등반이 제한될 수 있으니 사전 확인하세요.',
    nearby: [
      { name: '서귀포', id: 'seogwipo' },
      { name: '한라산', id: 'hallasan' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1619948549671-e0ee0ecdb927?w=1200&q=85',
      'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1200&q=85',
      'https://images.unsplash.com/photo-1505238680356-667a09ab350b?w=1200&q=85',
      'https://images.unsplash.com/photo-1580974852861-c3810a2d7f9f?w=1200&q=85',
    ],
    weather: '제주는 해양성 기후로 비교적 온화합니다. 여름(24~30°C), 겨울(3~8°C). 바람이 강한 편이므로 방풍 준비가 필요합니다.',
    rating: 4.9,
    reviewCount: 45218,
  },
  {
    id: 'gyeongju',
    name: '경주',
    nameEn: 'Gyeongju',
    location: '경상북도',
    description: '천년 신라의 도읍지. 불국사와 석굴암, 대릉원이 전하는 찬란한 역사의 현장으로 떠납니다.',
    image: 'https://images.unsplash.com/photo-1601823984263-b87b59798b70?w=800&q=80',
    tag: '역사',
    history: "경주는 신라 천년(BC 57 ~ AD 935)의 도읍지로, '박물관 도시'라 불릴 정도로 수많은 역사 유적이 밀집되어 있습니다. 불국사와 석굴암은 유네스코 세계문화유산으로 등록되었으며, 경주역사유적지구에도 대릉원, 첨성대, 안압지 등 주요 유적이 포함되어 있습니다. 경주는 도시 전체가 거대한 역사 공원과도 같은 곳입니다.",
    highlights: [
      '불국사 — 유네스코 세계문화유산, 한국 불교 건축의 백미',
      '석굴암 — 화강암으로 조성된 석굴 사찰',
      '대릉원 — 신라 왕들의 거대한 고분군',
      '첨성대 — 동아시아 최고(最古)의 천문대',
      '안압지 — 신라 왕실의 별궁 연못',
      '황리단길 — 한옥 카페와 공방이 모인 감성 거리',
    ],
    bestTime: '3~5월, 9~11월. 경주의 자전거 투어에 최적화된 온화한 계절입니다.',
    howToGet: '서울역에서 KTX로 신경주역까지 약 2시간, 신경주역에서 시내까지 버스 30분.',
    tip: '경주는 자전거로 돌아보기에 최적의 도시입니다. 시내 곳곳에 자전거 대여소가 있습니다. 역사 유적지를 효율적으로 돌려면 대릉원→첨성대→안압지→불국사 순서를 추천합니다.',
    nearby: [
      { name: '불국사', id: 'bulguksa' },
      { name: '안동하회마을', id: 'andong' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1601823984263-b87b59798b70?w=1200&q=85',
      'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=1200&q=85',
      'https://images.unsplash.com/photo-1586611240295-2f0f7e11f0c7?w=1200&q=85',
      'https://images.unsplash.com/photo-1590933037568-f2f0d1e0a0b0?w=1200&q=85',
    ],
    weather: '경주는 내륙성 기후로 여름(22~30°C)과 겨울(-3~5°C)의 기온 차가 큽니다. 봄과 가을이 가장 쾌적합니다.',
    rating: 4.7,
    reviewCount: 19872,
  },
  {
    id: 'busan',
    name: '부산',
    nameEn: 'Busan',
    location: '부산광역시',
    description: '바다와 산이 어우러진 매력적인 항구 도시. 해운대와 감천문화마을, 자갈치 시장까지.',
    image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=800&q=80',
    tag: '도시',
    history: '부산은 한국 제2의 도시이자 최대 항구 도시입니다. 한국전쟁 당시 임시 수도로서 피난민의 아픔과 역경을 딛고 성장한 도시로, 해운대 해수욕장, 자갈치 시장, 국제시장 등 근현대사의 흔적이 살아 숨 쉬는 곳입니다. 최근에는 감천문화마을과 영도의 예술적 감성이 더해져 과거와 현재가 공존하는 매력적인 관광지로 거듭났습니다.',
    highlights: [
      '해운대 해수욕장 — 한국 대표 해변, 파라다이스',
      '감천문화마을 — 알록달록 벽화 마을, 부산의 산토리니',
      '자갈치 시장 — 한국 최대 수산 시장, 활어 체험',
      '용두산 공원 — 부산타워와 시내 전망',
      '국제시장 — 한국전쟁의 역사가 깃든 전통 시장',
      '영도 흰여울문화마을 — 예술가들이 모인 해안 마을',
    ],
    bestTime: '6~9월 (해수욕 시즌, 축제 풍성), 10~11월 (가을 단풍과 온화한 날씨)',
    howToGet: '서울역에서 KTX로 부산역까지 약 2시간 30분. 김해국제공항은 국내선과 국제선이 취항합니다.',
    tip: '부산은 지하철이 잘 발달되어 있어 대중교통으로 주요 관광지를 쉽게 방문할 수 있습니다. 해운대에서 자갈치까지의 해변 산책로(해파랑길)를 따라 걷는 것을 추천합니다. 태종대 일몰은 부산에서 가장 아름다운 풍경 중 하나입니다.',
    nearby: [
      { name: '경주', id: 'gyeongju' },
      { name: '울산', id: 'ulsan' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=1200&q=85',
      'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=1200&q=85',
      'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=1200&q=85',
      'https://images.unsplash.com/photo-1586843875872-2b8f52b8c1f0?w=1200&q=85',
    ],
    weather: '부산은 해양성 기후로 겨울에도 비교적 온화합니다(-1~8°C). 여름(23~28°C)에는 해양 스포츠를 즐기기에 좋습니다.',
    rating: 4.6,
    reviewCount: 32654,
  },
  {
    id: 'seoraksan',
    name: '설악산',
    nameEn: 'Seoraksan National Park',
    location: '강원특별자치도 속초시',
    description: '한국에서 가장 아름다운 산 중 하나. 울산바위와 비선대, 천불동 계곡의 장관이 펼쳐집니다.',
    image: 'https://images.unsplash.com/photo-1597088758740-56eb7eb0a2f7?w=800&q=80',
    tag: '자연',
    history: '설악산은 강원도 동북부에 위치한 국립공원으로, 한국에서 세 번째로 높은 산(해발 1,708m)입니다. 1970년에 우리나라에서 다섯 번째 국립공원으로 지정되었으며, 유네스코 생물권보전지역으로도 등록되었습니다. 설악산은 권금성, 울산바위, 비선대, 천불동 계곡 등 장엄한 암봉과 계곡이 어우러져 사계절 각기 다른 아름다움을 선사합니다.',
    highlights: [
      '울산바위 — 거대한 화강암 봉우리, 설악의 상징',
      '권금성 — 케이블카로 오를 수 있는 전망 명소',
      '비선대 — 계곡과 기암괴석이 어우러진 절경',
      '천불동 계곡 — 수려한 계곡과 폭포의 향연',
      '설악산 케이블카 — 한눈에 내려다보는 설악 전경',
      '신흥사 — 설악산을 대표하는 고찰(古刹)',
    ],
    bestTime: '4~6월 (봄, 진달래와 철쭉), 10월 (가을, 장관을 이루는 단풍)',
    howToGet: '서울에서 동서울터미널에서 속초까지 버스 약 2시간 30분, 속초시내에서 설악산 입구까지 버스 20분.',
    tip: '가을 단풍 시즌(10월 중순~11월 초)은 주말에 극심한 혼잡이 예상되므로 평일 방문을 추천합니다. 등산로는 코스별로 난이도가 다르니 초보자는 권금성 코스나 비선대 코스부터 시작하세요. 겨울에는 빙판 구간이 많아 아이젠이 필수입니다.',
    nearby: [
      { name: '속초', id: 'sokcho' },
      { name: '낙산사', id: 'naksansa' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1597088758740-56eb7eb0a2f7?w=1200&q=85',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=85',
      'https://images.unsplash.com/photo-1580974852861-c3810a2d7f9f?w=1200&q=85',
    ],
    weather: '설악산은 고산성 기후로 연교차가 큽니다. 여름(18~25°C)은 산에서 더위를 피하기 좋고, 겨울(-8~0°C)은 설경이 장관이나 혹한에 대비해야 합니다.',
    rating: 4.8,
    reviewCount: 21543,
  },
  {
    id: 'jeonju',
    name: '전주한옥마을',
    nameEn: 'Jeonju Hanok Village',
    location: '전북특별자치도 전주시',
    description: '800여 채의 한옥이 고스란히 보존된 살아있는 역사 공간. 한복 입고 거니는 특별한 경험.',
    image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800&q=80',
    tag: '문화',
    history: '전주한옥마을은 조선 태조 이성계의 어진을 모신 경기전과 전동성당을 중심으로 형성된 대한민국 최대 규모의 도심 한옥 군집 지역입니다. 일제강점기에도 형태를 유지한 800여 채의 한옥이 밀집되어 있어 한국 전통 건축의 아름다움을 생생하게 체험할 수 있습니다. 전주는 또한 비빔밥의 본고장이자 한지(韓紙)의 고장으로도 유명합니다.',
    highlights: [
      '경기전 — 조선 태조 이성계의 어진을 모신 사적',
      '전동성당 — 로마네스크 양식의 아름다운 성당',
      '한복 체험 — 전주 한옥과 어우러지는 전통 의상',
      '전주비빔밥 — 한국을 대표하는 맛의 고장',
      '전주한지 — 천년의 전통을 자랑하는 한국 종이',
      '오목대와 이목대 — 전주를 한눈에 내려다보는 전망대',
    ],
    bestTime: '3~5월, 9~11월. 한옥마을 산책과 한복 체험에 쾌적한 날씨입니다.',
    howToGet: '서울역에서 KTX로 전주역까지 약 1시간 50분, 전주역에서 한옥마을까지 버스 20분.',
    tip: "한복을 대여하면 한옥마을의 주요 시설을 할인받을 수 있습니다. 주말과 공휴일은 방문객이 많아 평일 방문을 추천합니다. 전주비빔밥을 맛보려면 '경기전 앞' 골목의 전통 비빔밥집을 찾아보세요.",
    nearby: [
      { name: '전주객사', id: 'jeonju-gaeksa' },
      { name: '덕진공원', id: 'deokjin-park' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=1200&q=85',
      'https://images.unsplash.com/photo-1586611240295-2f0f7e11f0c7?w=1200&q=85',
      'https://images.unsplash.com/photo-1590933037568-f2f0d1e0a0b0?w=1200&q=85',
      'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=1200&q=85',
    ],
    weather: '전주는 내륙성 기후로 여름(23~30°C) 습도가 높고, 겨울(-3~5°C)은 비교적 온화합니다.',
    rating: 4.5,
    reviewCount: 16789,
  },
  {
    id: 'andong',
    name: '안동하회마을',
    nameEn: 'Andong Hahoe Village',
    location: '경상북도 안동시',
    description: '유네스코 세계문화유산, 한국 전통 양반 문화의 정수가 살아 숨 쉬는 역사 마을.',
    image: 'https://images.unsplash.com/photo-1601823984263-b87b59798b70?w=800&q=80',
    tag: '역사',
    history: "안동하회마을은 조선 시대 양반 가문인 풍천 류씨 집성촌으로, 600여 년간 원형이 보존된 대표적인 전통 마을입니다. 2010년 유네스코 세계문화유산에 등재되었으며, 마을 이름은 낙동강이 마을을 감싸 흐르는 모습이 '돌아 흐른다'는 뜻에서 유래했습니다. 하회별신굿탈놀이는 한국의 대표적인 가면극으로 유네스코 인류무형문화유산입니다.",
    highlights: [
      '하회탈 — 국보 제121호, 고려 시대 가면',
      '양진당 — 보물 제306호, 류성룡 종가',
      '충효당 — 짚신도 버리지 않는 청백리 정신',
      '부용대 — 마을을 조망하는 최고의 전망대',
      '하회별신굿탈놀이 — 한국 대표 전통 가면극',
      '만송정 — 500년 수령의 소나무 숲',
    ],
    bestTime: '4~5월 (봄, 마을이 생기로 가득), 10월 (가을, 황금 들판과 어우러진 전통 가옥)',
    howToGet: '서울에서 동서울터미널에서 안동까지 버스 약 2시간 40분, 안동터미널에서 하회마을까지 버스 40분.',
    tip: '하회탈은 실제로 마을을 수호하는 신성한 존재로 여겨져 왔습니다. 하회별신굿탈놀이 공연은 특정 기간에만 열리니 사전 확인이 필요합니다. 부용대에서 바라보는 일몰과 하회마을 전경이 매우 아름답습니다.',
    nearby: [
      { name: '경주', id: 'gyeongju' },
      { name: '도산서원', id: 'dosanseowon' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1601823984263-b87b59798b70?w=1200&q=85',
      'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=1200&q=85',
      'https://images.unsplash.com/photo-1586611240295-2f0f7e11f0c7?w=1200&q=85',
      'https://images.unsplash.com/photo-1590933037568-f2f0d1e0a0b0?w=1200&q=85',
    ],
    weather: '안동은 내륙 분지성 기후로 여름(21~29°C)과 겨울(-5~3°C)의 기온 차가 큰 편입니다.',
    rating: 4.6,
    reviewCount: 12456,
  },
  {
    id: 'yeosu',
    name: '여수',
    nameEn: 'Yeosu',
    location: '전라남도 여수시',
    description: '밤바다와 이순신 장군의 역사, 싱싱한 해산물이 공존하는 남해안의 보석.',
    image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=800&q=80',
    tag: '도시',
    history: '여수는 2012년 여수세계박람회를 개최하며 국제적인 해양 관광 도시로 도약했습니다. 이순신 장군이 한산도 대첩을 승리로 이끈 역사적 배경을 가진 고장으로, 충무공의 흔적이 곳곳에 남아 있습니다. 여수는 또한 300여 개의 크고 작은 섬으로 이루어진 다도해 해상 국립공원의 관문이며, 여수 밤바다는 아름다운 야경으로 유명합니다.',
    highlights: [
      '여수 밤바다 — 아름다운 야경의 정점, 낭만의 도시',
      '돌산대교 — 여수의 랜드마크, 밤에는 환상적인 조명',
      '여수세계박람회장 — 엑스포 이후 재탄생한 복합 문화 공간',
      '향일암 — 일출로 유명한 아름다운 사찰',
      '오동도 — 동백꽃이 아름다운 섬, 노을 명소',
      '여수 해상케이블카 — 바다 위를 나는 짜릿한 경험',
    ],
    bestTime: '3~5월 (봄, 동백꽃과 유채꽃), 10~11월 (가을, 여수 밤바다의 낭만)',
    howToGet: '서울역에서 KTX로 여수엑스포역까지 약 2시간 40분. 인천/김포에서 여수공항까지 비행기 50분.',
    tip: "여수 밤바다는 '여수 밤바다' 거리와 종포해양공원에서 가장 아름답게 감상할 수 있습니다. 게장백반과 갈치조림은 여수에서 꼭 맛봐야 할 로컬 푸드입니다. 해상케이블카는 석양 시간대가 가장 인기가 많습니다.",
    nearby: [
      { name: '순천만', id: 'suncheon' },
      { name: '광주', id: 'gwangju' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=1200&q=85',
      'https://images.unsplash.com/photo-1586843875872-2b8f52b8c1f0?w=1200&q=85',
      'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=1200&q=85',
      'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=1200&q=85',
    ],
    weather: '여수는 해양성 기후로 겨울(-1~5°C) 비교적 온화하고 여름(22~28°C)은 해풍이 불어 쾌적합니다.',
    rating: 4.7,
    reviewCount: 15234,
  },
]

export const foods: FoodItem[] = [
  {
    id: 'kimchi',
    name: '김치',
    nameEn: 'Kimchi',
    description: '한국인의 밥상에 빠질 수 없는 대표 발효 음식. 배추김치부터 깍두기까지, 그 종류만 200여 가지.',
    image: 'https://images.unsplash.com/photo-1553163147-edc03cf4e73e?w=800&q=80',
    tag: '발효',
    region: '전국',
    history: "김치는 한국의 대표적인 발효 음식으로, 겨울 동안 신선한 채소를 섭취하기 위해 발전했습니다. 고추가 도입된 조선 중기 이후 지금의 빨간 김치 형태를 갖추게 되었으며, 2013년 유네스코 인류무형문화유산으로 등재된 '김장 문화'는 한국인의 공동체 정신을 보여줍니다.",
  },
  {
    id: 'bibimbap',
    name: '비빔밥',
    nameEn: 'Bibimbap',
    description: '따뜻한 밥 위에 다양한 나물과 고추장을 올려 비벼 먹는 한국의 대표 건강식.',
    image: 'https://images.unsplash.com/photo-1565299571447-3c874c109845?w=800&q=80',
    tag: '건강',
    region: '전주',
    history: '비빔밥은 설날에 남은 제사 음식을 한데 비벼 먹던 풍습에서 유래했다는 설이 있습니다. 전주비빔밥이 가장 유명하며, 돌솥비빔밥은 뜨거운 돌솥에 밥을 담아 누릉지를 함께 즐길 수 있어 인기가 많습니다.',
  },
  {
    id: 'bulgogi',
    name: '불고기',
    nameEn: 'Bulgogi',
    description: '간장 양념에 재운 얇은 소고기를 숯불에 구워내는 한국의 대표 고기 요리. 달콤하고 풍부한 감칠맛.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
    tag: '고기',
    region: '전국',
    history: '불고기는 고려 시대부터 전해져 내려온 한국의 대표적인 양념 구이 요리입니다. 간장, 설탕, 배즙, 마늘 등으로 양념한 소고기를 석쇠에 구워내는데, 양념이 caramelization 되면서 독특한 풍미와 식감을 만들어냅니다.',
  },
  {
    id: 'tteokbokki',
    name: '떡볶이',
    nameEn: 'Tteokbokki',
    description: '쫄깃한 가래떡을 매콤달콤한 고추장 소스에 버무린 한국인의 대표 길거리 음식.',
    image: 'https://images.unsplash.com/photo-1635363638580-c2809d049eee?w=800&q=80',
    tag: '길거리',
    region: '서울',
    history: "떡볶이는 원래 궁중 요리인 '떡볶이'에서 시작되어 1950년대 이후 고추장을 넣은 매운 떡볶이가 등장하면서 대중적인 길거리 음식으로 자리잡았습니다. 신당동 떡볶이 골목이 특히 유명합니다.",
  },
  {
    id: 'samgyeopsal',
    name: '삼겹살',
    nameEn: 'Samgyeopsal',
    description: '두툼한 삼겹살을 테이블에서 직접 구워 상추에 싸 먹는 한국인의 소울 푸드.',
    image: 'https://images.unsplash.com/photo-1603073163308-9654c3fb70b1?w=800&q=80',
    tag: '고기',
    region: '전국',
    history: '삼겹살은 1980년대 이후 폭발적인 인기를 끌며 한국인이 가장 사랑하는 고기 요리로 자리잡았습니다. 두툼한 삼겹살을 숯불이나 철판에 구워 쌈채소에 마늘, 고추, 쌈장과 함께 싸 먹는 방식이 일반적이며, 소주와의 궁합이 뛰어납니다.',
  },
  {
    id: 'hanjeongsik',
    name: '한정식',
    nameEn: 'Hanjeongsik',
    description: '여러 가지 반찬과 메인 요리가 한 상 가득 차려지는 한국식 코스 요리. 오감을 만족시키는 품격.',
    image: 'https://images.unsplash.com/photo-1553163147-edc03cf4e73e?w=800&q=80',
    tag: '코스',
    region: '전국',
    history: '한정식은 조선 시대 양반 가문의 식사 문화에서 발전한 한국식 코스 요리입니다. 밥, 국, 김치를 기본으로 12가지가 넘는 반찬이 한 상에 차려지는 것이 특징이며, 한국 음식의 조화와 균형을 가장 잘 보여주는 식사 형태입니다.',
  },
  {
    id: 'kimchijjigae',
    name: '김치찌개',
    nameEn: 'Kimchi Jjigae',
    description: '익은 김치와 돼지고기를 넣고 끓인 얼큰한 찌개. 한국 가정식의 대표 메뉴이자 최고의 밥 도둑.',
    image: 'https://images.unsplash.com/photo-1553163147-edc03cf4e73e?w=800&q=80',
    tag: '찌개',
    region: '전국',
    history: '김치찌개는 묵은지를 활용하여 끓이는 한국의 대표적인 찌개입니다. 신 김치의 시원하고 깊은 맛이 돼지고기의 기름진 맛과 어우러져 깊은 감칠맛을 만들어내며, 한국 가정에서 가장 즐겨 먹는 일상 요리 중 하나입니다.',
  },
  {
    id: 'naengmyeon',
    name: '냉면',
    nameEn: 'Naengmyeon',
    description: '시원한 육수에 메밀면을 말아 먹는 여름철 대표 음식. 얼음을 동동 띄워 더위를 식혀줍니다.',
    image: 'https://images.unsplash.com/photo-1565299571447-3c874c109845?w=800&q=80',
    tag: '면',
    region: '평양/함흥',
    history: '냉면은 원래 북한 지역의 전통 음식으로, 한국전쟁 이후 남한 전역으로 퍼져 나갔습니다. 물냉면(평양식)과 비빔냉면(함흥식)이 대표적이며, 여름에는 시원한 냉면 한 그릇이 별미입니다.',
  },
  {
    id: 'japchae',
    name: '잡채',
    nameEn: 'Japchae',
    description: '당면을 다양한 채소와 고기와 함께 간장 양념에 볶아낸 한국의 대표 잔치 음식.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
    tag: '잔치',
    region: '전국',
    history: '잡채는 조선 시대 궁중 음식에서 유래했습니다. 원래는 여러 가지 채소를 볶은 요리였으나, 20세기 초 중국에서 당면이 들어오면서 현재의 잡채 형태를 갖추게 되었습니다. 생일이나 명절 같은 특별한 날에 빠지지 않고 올라가는 음식입니다.',
  },
  {
    id: 'samgyetang',
    name: '삼계탕',
    nameEn: 'Samgyetang',
    description: '통닭에 찹쌀, 인삼, 대추 등을 넣고 푹 고아낸 보양식. 여름철 체력 보충의 정석.',
    image: 'https://images.unsplash.com/photo-1603073163308-9654c3fb70b1?w=800&q=80',
    tag: '보양',
    region: '전국',
    history: "삼계탕은 한국의 대표적인 여름철 보양식으로, '이열치열(以熱治熱)'의 원리에 따라 더운 날씨에 뜨거운 닭백숙을 먹으며 체력을 보충하는 문화에서 비롯되었습니다. 복날(초복, 중복, 말복)에 특히 많이 찾는 음식입니다.",
  },
  {
    id: 'galbi',
    name: '갈비',
    nameEn: 'Galbi',
    description: '양념에 재운 소갈비를 숯불에 구워내는 한국 BBQ의 정수. 부드러운 육질과 풍미가 일품.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
    tag: 'BBQ',
    region: '전국',
    history: '갈비는 한국의 대표 BBQ 요리로, 간장, 설탕, 배즙, 마늘 등으로 양념한 소갈비를 숯불에 구워 먹습니다. 양념이 caramelization 되면서 만들어지는 달콤하고 고소한 맛이 특징이며, 수원 갈비가 특히 유명합니다.',
  },
  {
    id: 'pajeon',
    name: '파전',
    nameEn: 'Pajeon',
    description: '바삭한 부침개에 쪽파와 해물이 듬뿍. 빗소리와 함께 생각나는 한국의 대표 간식.',
    image: 'https://images.unsplash.com/photo-1565299571447-3c874c109845?w=800&q=80',
    tag: '전',
    region: '전국',
    history: '파전은 한국의 대표적인 전(부침개) 요리로, 밀가루 반죽에 쪽파를 듬뿍 넣고 반죽하여 기름에 지져냅니다. 해물파전이 가장 인기가 많으며, 비 오는 날 막걸리와 함께 즐기는 음식으로 잘 알려져 있습니다.',
  },
]

export const cultureItems: CultureItem[] = [
  {
    id: 'hanbok',
    name: '한복',
    nameEn: 'Hanbok',
    description: '한국의 전통 의상으로, 아름다운 색상과 우아한 선이 특징입니다. 특별한 날을 기념하는 최고의 선택.',
    image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800&q=80',
    history: '한복은 삼국 시대부터 한반도에서 착용해 온 한국의 전통 의상입니다. 여성용 한복은 저고리와 치마로, 남성용은 저고리와 바지로 구성됩니다. 조선 시대에는 신분과 상황에 따라 다양한 색상과 재질의 한복이 착용되었으며, 현대에는 설날, 추석 등 명절과 결혼식 같은 특별한 날에 주로 입습니다.',
  },
  {
    id: 'pansori',
    name: '판소리',
    nameEn: 'Pansori',
    description: '한 명의 소리꾼이 북 반주에 맞춰 긴 이야기를 노래로 엮어내는 한국의 독창적인 음악극.',
    image: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?w=800&q=80',
    history: "판소리는 한 명의 소리꾼(광대)이 북 반주(고수)에 맞춰 긴 이야기를 소리(노래)와 아니리(말)로 엮어내는 한국의 전통 음악극입니다. 2003년 유네스코 인류무형문화유산으로 등재되었으며, '춘향가', '심청가', '흥보가' 등 다섯 마당의 판소리가 현재까지 전승되고 있습니다.",
  },
  {
    id: 'dado',
    name: '다도',
    nameEn: 'Korean Tea Ceremony',
    description: '차를 통해 마음의 평화를 찾는 한국의 전통 의례. 느림의 미학이 깃든 특별한 시간.',
    image: 'https://images.unsplash.com/photo-1563911892437-1feda0179e1b?w=800&q=80',
    history: '한국의 다도(茶道)는 삼국 시대에 차가 전래된 이후 발전한 전통 차 문화입니다. 조선 시대에는 선비 문화와 결합하여 정신 수양의 일환으로 자리잡았으며, 오늘날에는 현대인의 일상 속에서 휴식과 명상을 위한 문화로 이어지고 있습니다. 한국의 차는 녹차가 대표적이며, 보성과 하동이 주요 차 생산지입니다.',
  },
  {
    id: 'taekwondo',
    name: '태권도',
    nameEn: 'Taekwondo',
    description: '한국의 자랑스러운 국기(國技). 힘과 예술이 조화된 올림픽 정식 종목으로 세계인의 사랑을 받고 있습니다.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
    history: "태권도는 한국 고유의 전통 무예에서 발전한 현대 무술 스포츠입니다. 1955년 '태권도'라는 명칭이 공식화되었으며, 1988년 서울올림픽에서 시범 종목으로 채택된 후 2000년 시드니올림픽부터 정식 종목으로 자리잡았습니다. 현재 세계 200여 개국에서 8천만 명 이상의 수련인이 활동 중입니다.",
  },
  {
    id: 'hanji',
    name: '한지',
    nameEn: 'Hanji (Korean Paper)',
    description: '천년을 견디는 한국 전통 종이, 한지. 닥나무 섬유로 만든 친환경 명품 종이입니다.',
    image: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?w=800&q=80',
    history: "한지는 닥나무 껍질을 주원료로 하는 한국의 전통 종이입니다. 삼국 시대부터 제작되어 온 한지는 '천년을 가는 종이'라 불릴 정도로 뛰어난 보존성을 자랑하며, 세계에서 가장 오래된 금속 활자본인 '직지심체요절'도 한지에 인쇄되었습니다. 전주 한지가 특히 유명합니다.",
  },
  {
    id: 'talchum',
    name: '탈춤',
    nameEn: 'Talchum (Korean Mask Dance)',
    description: '가면을 쓰고 추는 한국 전통 춤사위. 해학과 풍자가 담긴 대중 예술의 백미.',
    image: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?w=800&q=80',
    history: '탈춤은 한국의 전통 가면극으로, 서민들의 삶과 애환을 해학과 풍자로 표현한 대중 예술입니다. 하회별신굿탈놀이, 봉산탈춤, 강릉관노가면극 등 지역별로 다양한 형태가 전승되어 왔으며, 2022년 유네스코 인류무형문화유산으로 등재되었습니다.',
  },
  {
    id: 'seoye',
    name: '서예',
    nameEn: 'Seoye (Korean Calligraphy)',
    description: '붓으로 마음을 그리는 한국의 전통 서예. 선비 정신이 깃든 문자의 예술.',
    image: 'https://images.unsplash.com/photo-1563911892437-1feda0179e1b?w=800&q=80',
    history: '한국 서예는 한자와 한글을 아우르는 독창적인 문자 예술입니다. 조선 시대 선비들의 필수 교양이었으며, 오늘날에는 현대 미술과 접목하여 새로운 장르로 발전하고 있습니다. 한글 서예는 한글 자모의 곡선미를 살린 독특한 예술 세계를 보여줍니다.',
  },
  {
    id: 'jangdokdae',
    name: '장독대',
    nameEn: 'Jangdokdae (Fermentation Pottery)',
    description: '한국 전통 발효 문화의 상징, 장독대. 간장, 된장, 고추장이 익어가는 시간의 맛.',
    image: 'https://images.unsplash.com/photo-1563911892437-1feda0179e1b?w=800&q=80',
    history: '장독대는 간장, 된장, 고추장 등 한국 전통 장(醬)을 담가 숙성시키는 항아리를 두는 공간입니다. 한국의 장 문화는 2024년 유네스코 인류무형문화유산으로 등재되었으며, 옹기는 미세한 기공을 통해 숨 쉬면서 장이 숙성되는 최적의 조건을 만들어냅니다.',
  },
]

export const stats = [
  { label: '공식 관광지', value: 1500, suffix: '+' },
  { label: '연간 외래 관광객', value: 1700, suffix: '만+' },
  { label: '유네스코 유산', value: 16, suffix: '개' },
  { label: '전통 음식 종류', value: 500, suffix: '+' },
  { label: '국립공원', value: 22, suffix: '곳' },
  { label: '공식 여행 코스', value: 300, suffix: '+' },
]

export const testimonials = [
  {
    id: 't1',
    name: '김미영',
    location: '서울',
    avatar: 'M',
    text: '경복궁에서 한복 입고 걸으며 찍은 사진이 인생샷이었어요. 한국의 아름다움을 제대로 느낄 수 있었던 여행이었습니다.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'John Smith',
    location: 'USA',
    avatar: 'J',
    text: 'I fell in love with Korean cuisine during my trip. The bibimbap in Jeonju was absolutely incredible. Can\'t wait to come back!',
    rating: 5,
  },
  {
    id: 't3',
    name: '박지훈',
    location: '부산',
    avatar: 'P',
    text: '제주도 올레길을 걸으며 만난 풍경은 평생 잊을 수 없을 거예요. 일출봉에서 맞이한 아침이 정말 환상적이었습니다.',
    rating: 5,
  },
  {
    id: 't4',
    name: 'Sarah Chen',
    location: 'Taiwan',
    avatar: 'S',
    text: 'Gyeongju is like a living museum. Cycling through ancient tombs and visiting Bulguksa Temple was a journey through time.',
    rating: 4,
  },
  {
    id: 't5',
    name: '이수진',
    location: '인천',
    avatar: 'L',
    text: '전주한옥마을에서 보낸 주말이 정말 행복했어요. 한복 체험도 하고 전주비빔밥도 먹고, 한국 전통의 멋을 만끽했습니다.',
    rating: 5,
  },
  {
    id: 't6',
    name: 'Michael Torres',
    location: 'Spain',
    avatar: 'M',
    text: 'Busan surprised me the most. The combination of beaches, mountains, and the vibrant Jagalchi market is simply unique.',
    rating: 5,
  },
]

export const navItems = [
  { id: 'destinations', label: '여행지', href: '#destinations' },
  { id: 'food', label: '음식', href: '#food' },
  { id: 'culture', label: '문화', href: '#culture' },
  { id: 'gallery', label: '갤러리', href: '#gallery' },
]
