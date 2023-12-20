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
      const search = document.getElementById('search')?.parentNode;

      search.style.height = 'auto';
      search.innerHTML = '';

      const config = {
        componentType: "SearchBar",
        targetElement: search,
        properties: {
            chatButtonType: "ICON_TEXT",
            baseSettings: {
                integrationId: "integrationId",
                apiKey: "apiKey",
                organizationId: "organizationId",
                primaryBrandColor: "#0c44d4",
                organizationDisplayName: "Redocly",
            },
            aiChatSettings: {
                chatSubjectName: "Redocly",
                botAvatarSrcUrl:
                "/static/redocly-icon-white-536ccfebc159dce0958e7f52794cad9d.png",
                quickQuestions: [
                    "Example question 1?",
                    "Example question 2?",
                    "Example question 3?",
                ],
                getHelpCallToActions: [
                    {
                        icon: { builtIn: "FaSlack" },
                        name: "Slack",
                        url: "https://myorg.slack.com/C010101010",
                    },
                    {
                        icon: { builtIn: "FaDiscord" },
                        name: "Discord",
                        url: "https://discord.com/invite/invidecode123",
                    },
                    {
                        icon: { builtIn: "FaGithub" },
                        name: "GitHub",
                        url: "https://github.com/myorg/myrepo/discussions",
                    },
                ],
            },
            searchSettings: {},
            modalSettings: {},
        },
    };
  
    Inkeep().embed(config);
  
    const observer = new MutationObserver((mutationsList, observer) => {
        const search = document.getElementById('search')?.parentNode;
        
        if(!search) return
        
        const inkeepPortals = document.getElementsByTagName('inkeep-portal')

        Array.from(inkeepPortals)?.forEach((inkeepPortal) => {
            inkeepPortal.remove()
        })

        search.innerHTML = '';
        search.style.height = 'auto';

        config.targetElement = search;
        Inkeep().embed(config);
      });
  
    observer.observe(document.head, { childList: true });
`;

  document.body.appendChild(inkeepWidgetScript);
};

const embedScript = addScript(
  "https://unpkg.com/@inkeep/widgets-embed@latest/dist/embed.js"
);

embedScript.addEventListener("load", () => {
  addInkeepWidget();
});
