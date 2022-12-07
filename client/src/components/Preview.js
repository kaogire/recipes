import React from "react";

function Preview() {
  const WeeklyRecipes = [
    {
      id: 1,
      title: "Chicken salad",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullamsodales, sem a pretium ullamcorper, lorem lectus auctor ligula,semper mattis velit purus vel urna. Duis porta felis ac semposuere convallis.",
      imageUrl:
        "https://images.unsplash.com/photo-1574926054530-540288c8e678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 2,
      title: "Roast chicken",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullamsodales, sem a pretium ullamcorper, lorem lectus auctor ligula,semper mattis velit purus vel urna. Duis porta felis ac semposuere convallis.",
      imageUrl:
        "https://images.unsplash.com/photo-1564436872-f6d81182df12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWVhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      title: "Fish ",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullamsodales, sem a pretium ullamcorper, lorem lectus auctor ligula,semper mattis velit purus vel urna. Duis porta felis ac semposuere convallis.",
      imageUrl:
        "https://images.unsplash.com/photo-1611599537845-1c7aca0091c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
  ];

  return (
    <div className="preview">
      <h2>Popular Recipes</h2>
      <div className="preview-container">
        {WeeklyRecipes.map(({ id, title, content, imageUrl }) => (
          <div
            className="panel"
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
            key={id}
          >
            <h3 className="heading">{title}</h3>
            <div className="preview-desc">
              <h3>{title}</h3>
              <p>{content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Preview;
