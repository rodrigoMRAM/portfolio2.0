import TagManager from "react-gtm-module";

export const clicksNavbar = (sectionId) => {
  console.log(sectionId);
  
  TagManager.dataLayer({
      dataLayer: {
          event: "clicks_portfolio",
          button_label: sectionId,
        },
    });
};

export const eventGA = (project) => {
    console.log(sectionId);

  TagManager.dataLayer({
    dataLayer: {
      event: "clicks_portfolio",
      button_label: `${project} boton`,
    },
  });
};

export const githubGA = (title) => {
  TagManager.dataLayer({
    dataLayer: {
      event: "clicks_portfolio",
      button_label: `${title} github`,
    },
  });
};

export const contactGA = (name, message) => {
  TagManager.dataLayer({
    dataLayer: {
      event: "clicks_portfolio",
      name: name,
      message: message
    },
  });
};