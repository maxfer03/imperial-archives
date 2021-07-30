interface IStarWars {
  id: number;
  title: string;
  body: string;
}

type SWState = {
  articles: IArticle[];
};

type ActionCreator = {
  type: string;
  article: IArticle;
};
