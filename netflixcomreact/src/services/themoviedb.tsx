const API_KEY = "952d508427e63fe7686b2482b4df5f68";
const API_BASE = "https://api.themoviedb.org/3";

const basicFetch = async (endpoint: string) => {
  const requisition = await fetch(`${API_BASE}${endpoint}`);
  const json = await requisition.json();
  return json;
};

const getHomeList = async () => {
  return [
    {
      slug: "Originals",
      title: "Originais do Netflix",
      items: await basicFetch(), // adicionar fetch específico da API
    },
    {
      slug: "trending",
      title: "Recomendados para Você",
      items: [],
    },
    {
      slug: "toprated",
      title: "Em Alta",
      items: [],
    },
    {
      slug: "action",
      title: "Ação",
      items: [],
    },
    {
      slug: "comedy",
      title: "Comédia",
      items: [],
    },
    {
      slug: "horror",
      title: "Terror",
      items: [],
    },
    {
      slug: "romance",
      title: "Romance",
      items: [],
    },
    {
      slug: "documentary",
      title: "Documentários",
      items: [],
    },
  ];
};

export default {
  getHomeList: getHomeList,
};
