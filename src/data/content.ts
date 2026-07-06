export interface Destination {
  id: string
  name: string
  nameEn: string
  location: string
  description: string
  image: string
  tag: string
}

export interface FoodItem {
  id: string
  name: string
  nameEn: string
  description: string
  image: string
  tag: string
}

export interface CultureItem {
  id: string
  name: string
  nameEn: string
  description: string
  image: string
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
  },
  {
    id: 'jeju',
    name: '제주도',
    nameEn: 'Jeju Island',
    location: '제주특별자치도',
    description: '한라산, 성산일출봉, 협재해변까지. 유네스코 삼관왕 제주도의 경이로운 자연을 만끽하세요.',
    image: 'https://images.unsplash.com/photo-1619948549671-e0ee0ecdb927?w=800&q=80',
    tag: '자연',
  },
  {
    id: 'gyeongju',
    name: '경주',
    nameEn: 'Gyeongju',
    location: '경상북도',
    description: '천년 신라의 도읍지. 불국사와 석굴암, 대릉원이 전하는 찬란한 역사의 현장으로 떠납니다.',
    image: 'https://images.unsplash.com/photo-1601823984263-b87b59798b70?w=800&q=80',
    tag: '역사',
  },
  {
    id: 'busan',
    name: '부산',
    nameEn: 'Busan',
    location: '부산광역시',
    description: '바다와 산이 어우러진 매력적인 항구 도시. 해운대와 감천문화마을, 자갈치 시장까지.',
    image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=800&q=80',
    tag: '도시',
  },
  {
    id: 'seoraksan',
    name: '설악산',
    nameEn: 'Seoraksan',
    location: '강원특별자치도',
    description: '한국에서 가장 아름다운 산 중 하나. 울산바위와 비선대, 천불동 계곡의 장관이 펼쳐집니다.',
    image: 'https://images.unsplash.com/photo-1597088758740-56eb7eb0a2f7?w=800&q=80',
    tag: '자연',
  },
  {
    id: 'jeonju',
    name: '전주한옥마을',
    nameEn: 'Jeonju Hanok Village',
    location: '전북특별자치도',
    description: '800여 채의 한옥이 고스란히 보존된 살아있는 역사 공간. 한복 입고 거니는 특별한 경험.',
    image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800&q=80',
    tag: '문화',
  },
]

export const foods: FoodItem[] = [
  {
    id: 'kimchi',
    name: '김치',
    nameEn: 'Kimchi',
    description: '한국인의 밥상에 빠질 수 없는 대표 발효 음식. 배추김치부터 깍두기까지, 그 종류만 200여 가지.',
    image: 'https://images.unsplash.com/photo-1553163147-edc03cf4e73e?w=800&q=80',
    tag: '전통',
  },
  {
    id: 'bibimbap',
    name: '비빔밥',
    nameEn: 'Bibimbap',
    description: '따뜻한 밥 위에 다양한 나물과 고추장을 올려 비벼 먹는 한국의 대표 건강식.',
    image: 'https://images.unsplash.com/photo-1565299571447-3c874c109845?w=800&q=80',
    tag: '건강',
  },
  {
    id: 'bulgogi',
    name: '불고기',
    nameEn: 'Bulgogi',
    description: '간장 양념에 재운 얇은 소고기를 숯불에 구워내는 한국의 대표 고기 요리. 달콤하고 풍부한 감칠맛.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
    tag: '고기',
  },
  {
    id: 'tteokbokki',
    name: '떡볶이',
    nameEn: 'Tteokbokki',
    description: '쫄깃한 가래떡을 매콤달콤한 고추장 소스에 버무린 한국인의 대표 길거리 음식.',
    image: 'https://images.unsplash.com/photo-1635363638580-c2809d049eee?w=800&q=80',
    tag: '길거리',
  },
  {
    id: 'samgyeopsal',
    name: '삼겹살',
    nameEn: 'Samgyeopsal',
    description: '두툼한 삼겹살을 테이블에서 직접 구워 상추에 싸 먹는 한국인의 소울 푸드.',
    image: 'https://images.unsplash.com/photo-1603073163308-9654c3fb70b1?w=800&q=80',
    tag: '고기',
  },
  {
    id: 'hanjeongsik',
    name: '한정식',
    nameEn: 'Hanjeongsik',
    description: '여러 가지 반찬과 메인 요리가 한 상 가득 차려지는 한국식 코스 요리. 오감을 만족시키는 품격.',
    image: 'https://images.unsplash.com/photo-1553163147-edc03cf4e73e?w=800&q=80',
    tag: '코스',
  },
]

export const cultureItems: CultureItem[] = [
  {
    id: 'hanbok',
    name: '한복',
    nameEn: 'Hanbok',
    description: '한국의 전통 의상으로, 아름다운 색상과 우아한 선이 특징입니다. 특별한 날을 기념하는 최고의 선택.',
    image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800&q=80',
  },
  {
    id: 'pansori',
    name: '판소리',
    nameEn: 'Pansori',
    description: '한 명의 소리꾼이 북 반주에 맞춰 긴 이야기를 노래로 엮어내는 한국의 독창적인 음악극.',
    image: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?w=800&q=80',
  },
  {
    id: 'dado',
    name: '다도',
    nameEn: 'Korean Tea Ceremony',
    description: '차를 통해 마음의 평화를 찾는 한국의 전통 의례. 느림의 미학이 깃든 특별한 시간.',
    image: 'https://images.unsplash.com/photo-1563911892437-1feda0179e1b?w=800&q=80',
  },
  {
    id: 'taekwondo',
    name: '태권도',
    nameEn: 'Taekwondo',
    description: '한국의 자랑스러운 국기(國技). 힘과 예술이 조화된 올림픽 정식 종목으로 세계인의 사랑을 받고 있습니다.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
  },
]

export const navItems = [
  { id: 'destinations', label: '여행지', href: '#destinations' },
  { id: 'food', label: '음식', href: '#food' },
  { id: 'culture', label: '문화', href: '#culture' },
]
