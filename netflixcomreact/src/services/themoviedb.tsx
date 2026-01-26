const API_BASE = "https://api.themoviedb.org/3";
const fetchOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTJkNTA4NDI3ZTYzZmU3Njg2YjI0ODJiNGRmNWY2OCIsIm5iZiI6MTc2OTM3OTAxMy42NzgwMDAyLCJzdWIiOiI2OTc2OTRjNTJhYjlmNWFhNWNhZTM2MGIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.OYut0O7plrphmoh3rAcEA0z_I10eQAzWhFN1Jdz42qU",
  },
};

const basicFetch = async (endpoint: string) => {
  const requisition = await fetch(`${API_BASE}${endpoint}`, fetchOptions);
  const json = await requisition.json();
  console.log(json); // TODO remove console.log, added for testing
  return json;
};

const getHomeList = async () => {
  return [
    {
      slug: "Originals",
      title: "Originais do Netflix",
      items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR`), // network=213 is the Netflix originals code
    },
    {
      slug: "trending",
      title: "Recomendados para Você",
      items: [], // TODO apply "originals" endpoint to the remaining slugs
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
