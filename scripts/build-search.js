const dotenv = require("dotenv");
const algoliasearch = require("algoliasearch/lite");

async function getAllBlogPosts() {
  // write your code to fetch your data
}

function transformPostsToSearchObjects(posts) {
  const transformed = posts.map((post) => {
    return {
      objectID: post.sys.id,
      firstname: post.firstname,
      lastname: post.lastname,
      slug: post.slug,
      zipcode: post.zipcode,
    };
  });
}

(async function () {
  dotenv.config();

  try {
    const posts = await getAllBlogPosts();
    const transformed = transformPostsToSearchObjects(posts);

    const client = algoliasearch(
      process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
      process.env.ALGOLIA_SEARCH_ADMIN_KEY
    );

    const index = client.initIndex("my_awesome_content");
    const algoliaResponse = await index.saveObjects(transformed);

    console.log(
      `🎉 Sucessfully added ${
        algoliaResponse.objectIDs.length
      } records to Algolia search. Object IDs:\n${algoliaResponse.objectIDs.join(
        "\n"
      )}`
    );
  } catch (error) {
    console.log(error);
  }
})();
