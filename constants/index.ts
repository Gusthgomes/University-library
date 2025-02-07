export const navigationLinks = [
  {
    href: "/library",
    label: "Library",
  },

  {
    img: "/icons/user.svg",
    selectedImg: "/icons/user-fill.svg",
    href: "/my-profile",
    label: "My Profile",
  },
];

export const adminSideBarLinks = [
  {
    img: "/icons/admin/home.svg",
    route: "/admin",
    text: "Home",
  },
  {
    img: "/icons/admin/users.svg",
    route: "/admin/users",
    text: "Lista de usuários",
  },
  {
    img: "/icons/admin/book.svg",
    route: "/admin/books",
    text: "Lista de livros",
  },
  {
    img: "/icons/admin/bookmark.svg",
    route: "/admin/book-requests",
    text: "Empréstimos",
  },
  {
    img: "/icons/admin/user.svg",
    route: "/admin/account-requests",
    text: "Requisição de contas",
  },
];

export const FIELD_NAMES = {
  fullName: "Full name",
  email: "Email",
  universityId: "University ID Number",
  password: "Password",
  universityCard: "Upload University ID Card",
};

export const FIELD_TYPES = {
  fullName: "text",
  email: "email",
  universityId: "number",
  password: "password",
};

export const sampleBooks = [
  {
    id: 1,
    title: "A Biblioteca da Meia-Noite",
    author: "Matt Haig",
    genre: "Fantasia / Ficção",
    rating: 4.6,
    total_copies: 20,
    available_copies: 10,
    description:
      "Um romance deslumbrante sobre todas as escolhas que fazem parte de uma vida bem vívida, A Biblioteca da Meia-Noite conta a história de Nora Seed enquanto ela se encontra entre a vida e a morte.",
    color: "#1c1f40",
    cover: "https://m.media-amazon.com/images/I/81J6APjwxlL.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "Um romance deslumbrante sobre todas as escolhas que fazem parte de uma vida bem vívida, A Biblioteca da Meia-Noite conta a história de Nora Seed enquanto ela se encontra entre a vida e a morte.",
  },
  {
    id: 2,
    title: "Habitos atomicos",
    author: "James Clear",
    genre: "Auto-ajuda / Produtividade",
    rating: 4.9,
    total_copies: 99,
    available_copies: 50,
    description:
      "Um guia revolucionário para criar bons hábitos, abandonar os ruins e melhorar 1% a cada dia.",
    color: "#fffdf6",
    cover: "https://m.media-amazon.com/images/I/81F90H7hnML.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "Um guia revolucionário para criar bons hábitos, abandonar os ruins e melhorar 1% a cada dia.",
  },
  {
    id: 3,
    title: "Você não conhece JS: Escopo e fechamentos",
    author: "Kyle Simpson",
    genre: "Ciência de dados / JavaScript",
    rating: 4.7,
    total_copies: 9,
    available_copies: 5,
    description:
      "Um guia essencial para entender os principais mecanismos do JavaScript, com foco em escopo e fechamentos.",
    color: "#f8e036",
    cover:
      "https://m.media-amazon.com/images/I/7186YfjgHHL._AC_UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "Um guia essencial para entender os principais mecanismos do JavaScript, com foco em escopo e fechamentos.",
  },
  {
    id: 4,
    title: "O Alquimista",
    author: "Paulo Coelho",
    genre: "Psicologia / Aventura",
    rating: 4.5,
    total_copies: 78,
    available_copies: 50,
    description:
      "Um conto mágico de Santiago, um pastor andaluz, que embarca em uma jornada para encontrar um tesouro mundial.",
    color: "#ed6322",
    cover:
      "https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "Um conto mágico de Santiago, um pastor andaluz, que embarca em uma jornada para encontrar um tesouro mundial..",
  },
  {
    id: 5,
    title: "Trabalho profundo",
    author: "Cal Newport",
    genre: "Auto-ajuda / Produtividade",
    rating: 4.7,
    total_copies: 23,
    available_copies: 23,
    description:
      "Regras para o sucesso focado em um mundo distraído, ensinando como cultivar foco profundo para atingir o pico de produtividade.",
    color: "#ffffff",
    cover: "https://m.media-amazon.com/images/I/81JJ7fyyKyS.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "Regras para o sucesso focado em um mundo distraído, ensinando como cultivar foco profundo para atingir o pico de produtividade.",
  },
  {
    id: 6,
    title: "Código limpo",
    author: "Robert C. Martin",
    genre: "Ciência de dados / Programação",
    rating: 4.8,
    total_copies: 56,
    available_copies: 56,
    description:
      "Um manual de desenvolvimento ágil de software, oferecendo melhores práticas e princípios para escrever código limpo e sustentável.",
    color: "#080c0d",
    cover:
      "https://m.media-amazon.com/images/I/71T7aD3EOTL._UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "Um manual de desenvolvimento ágil de software, oferecendo melhores práticas e princípios para escrever código limpo e sustentável.",
  },
  {
    id: 7,
    title: "O programador pragmático",
    author: "Andrew Hunt, David Thomas",
    genre: "Ciência de dados / Programação",
    rating: 4.8,
    total_copies: 25,
    available_copies: 3,
    description:
      "Um guia atemporal para desenvolvedores aprimorarem suas habilidades e melhorarem suas práticas de programação.",
    color: "#100f15",
    cover:
      "https://m.media-amazon.com/images/I/71VStSjZmpL._AC_UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "Um guia atemporal para desenvolvedores aprimorarem suas habilidades e melhorarem suas práticas de programação.",
  },
  {
    id: 8,
    title: "A psicologia do dinheiro",
    author: "Morgan Housel",
    genre: "Finanças / Auto-ajuda",
    rating: 4.8,
    total_copies: 10,
    available_copies: 5,
    description:
      "Morgan Housel explora os comportamentos e mentalidades únicos que moldam o sucesso financeiro e a tomada de decisões.",
    color: "#ffffff",
    cover:
      "https://m.media-amazon.com/images/I/81Dky+tD+pL._AC_UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "Morgan Housel explora os comportamentos e mentalidades únicos que moldam o sucesso financeiro e a tomada de decisões.",
  },
];
