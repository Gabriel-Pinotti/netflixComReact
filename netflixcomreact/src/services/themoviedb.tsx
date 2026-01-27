const API_BASE = "https://api.themoviedb.org/3";
const fetchOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTJkNTA4NDI3ZTYzZmU3Njg2YjI0ODJiNGRmNWY2OCIsIm5iZiI6MTc2OTM3OTAxMy42NzgwMDAyLCJzdWIiOiI2OTc2OTRjNTJhYjlmNWFhNWNhZTM2MGIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.OYut0O7plrphmoh3rAcEA0z_I10eQAzWhFN1Jdz42qU",
  },
};

const basicFetch = async (endpoint: string, language: string) => {
  const requisition = await fetch(
    `${API_BASE}${endpoint}${language}`,
    fetchOptions,
  );
  const json = await requisition.json();
  return json;
};

export interface MovieCategory {
  slug: string;
  title: string;
  items: object;
}

const getHomeList = async () => {
  // if needed, receive the language parameter as a string to use in basicFetch()
  return [
    {
      slug: "originals",
      title: "Originais do Netflix",
      items: await basicFetch(
        "/discover/tv?with_networks=213",
        "&language=pt-BR",
      ), // network=213 is the Netflix originals code
    },
    {
      slug: "trending",
      title: "Recomendados para Você",
      items: await basicFetch("/trending/all/week", "?language=pt-BR"),
    },
    {
      slug: "toprated",
      title: "Em Alta",
      items: await basicFetch("/movie/top_rated", "?language=pt-BR"),
    },
    {
      slug: "action",
      title: "Ação",
      items: await basicFetch(
        "/discover/movie?with_genres=28",
        "&language=pt-BR",
      ),
    },
    {
      slug: "comedy",
      title: "Comédia",
      items: await basicFetch(
        "/discover/movie?with_genres=35",
        "&language=pt-BR",
      ),
    },
    {
      slug: "horror",
      title: "Terror",
      items: await basicFetch(
        "/discover/movie?with_genres=27",
        "&language=pt-BR",
      ),
    },
    {
      slug: "romance",
      title: "Romance",
      items: await basicFetch(
        "/discover/movie?with_genres=10749",
        "&language=pt-BR",
      ),
    },
    {
      slug: "documentary",
      title: "Documentários",
      items: await basicFetch(
        "/discover/movie?with_genres=99",
        "&language=pt-BR",
      ),
    },
  ];
};

export default getHomeList;
