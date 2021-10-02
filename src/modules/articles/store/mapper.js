export const handleMapperArticles = (articles) => {
  return articles.map((article) => handleMapperArticle(article));
}

export const handleMapperArticle = (article) => {
  const random = Math.random(1000);

  return {
    ...article,
    coverImageThumb: `https://picsum.photos/300/200?grayscale/${random}`,
    coverImage: `https://picsum.photos/900/600?grayscale/${random}`,
  };
}