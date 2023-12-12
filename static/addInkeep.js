const addScript = (src, type = "module", defer = true) => {
  const script = document.createElement("script");
  script.src = src;
  script.type = type;
  script.defer = defer;
  document.body.appendChild(script);
  return script;
};

const addInkeepWidget = () => {
  const inkeepWidgetScript = document.createElement("script");
  inkeepWidgetScript.defer = true;
  inkeepWidgetScript.innerHTML = `
      const inkeepDiv = document.createElement("div");
      inkeepDiv.id = "inkeep";
      inkeepDiv.style.position = "absolute";

      document.body.appendChild(inkeepDiv);
      
      const inkeepWidget = Inkeep().embed({
          componentType: "ChatButton", // required, options: 'ChatButton', 'EmbeddedChat', 'SearchBar', 'CustomTrigger'
          targetElement: document.getElementById("inkeep"), // required, HTML element to render the widget into
          properties: {
              chatButtonType: "ICON_TEXT", // <-- the "Pill" variation
              baseSettings: {
                  integrationId: "integrationId", // required
                  apiKey: "apiKey", // required
                  organizationId: "organizationId", // required
                  primaryBrandColor: "#0c44d4", // your brand color, widget color scheme is derived from this
                  organizationDisplayName: "Redocly",
                  //... optional base settings
              },
              aiChatSettings: {
                  chatSubjectName: "Redocly", // <-- name of the subject of the chat
                  botAvatarSrcUrl: "/static/redocly-icon-white-536ccfebc159dce0958e7f52794cad9d.png", // insert your own bot avatar, in public folder or an absolutely url for externally hosted image
                  quickQuestions: [
                      "Example question 1?",
                      "Example question 2?",
                      "Example question 3?",
                  ],
                  getHelpCallToActions: [
                      {
                          icon: { builtIn: 'FaSlack' },
                          name: 'Slack',
                          url: 'https://myorg.slack.com/C010101010',
                      },
                      {
                          icon: { builtIn: 'FaDiscord' },
                          name: 'Discord',
                          url: 'https://discord.com/invite/invidecode123',
                      },
                      {
                          icon: { builtIn: 'FaGithub' },
                          name: 'GitHub',
                          url: 'https://github.com/myorg/myrepo/discussions',
                      },
                  ],
              },
              searchSettings: {
                  // optional
              }, 
              modalSettings: {
                  // optional
              },
          },
      });
  `;

  document.body.appendChild(inkeepWidgetScript);
};

const embedScript = addScript(
  "https://unpkg.com/@inkeep/widgets-embed@latest/dist/embed.js"
);

embedScript.addEventListener("load", () => {
  addInkeepWidget();
});
