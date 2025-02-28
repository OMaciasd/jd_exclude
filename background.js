console.log("Background script running...");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Message received:", request);

  if (request.message === "clicked_browser_action") {
    console.log("Browser action clicked!");

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (chrome.runtime.lastError) {
        console.error("Error querying tabs:", chrome.runtime.lastError);
        return;
      }

      if (tabs.length === 0) {
        console.warn("No active tabs found.");
        return;
      }

      if (!tabs || tabs.length === 0) {
        console.warn("No active tabs found.");
        return;
      }

      chrome.tabs.sendMessage(tabs[0].id, { message: "open_new_tab" }, (response) => {
        if (chrome.runtime.lastError) {
          console.error("Error sending message to content script:", chrome.runtime.lastError);
        } else {
          console.log("Message sent successfully:", response);
        }
      });
    });
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Message received:", request);

  if (request.message === "open_new_tab") {
    console.log("Opening new tab...");

    chrome.tabs.create({ url: "https://www.google.com" });
  }
});

chrome.runtime.onStartup.addListener(() => {
  console.log("Service Worker started!");
});

chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed or updated");
});

chrome.runtime.onSuspend.addListener(() => {
  console.log("Service Worker suspended!");
});

chrome.runtime.onSuspendCanceled.addListener(() => {
  console.log("Service Worker resumed!");
});

chrome.runtime.onConnect.addListener((port) => {
  console.log("Port connected:", port);

  port.onMessage.addListener((msg) => {
    console.log("Message received from port:", msg);
  });

  port.postMessage({ message: "Hello, world!" });
});

chrome.runtime.onConnectExternal.addListener((port) => {
  console.log("External port connected:", port);

  port.onMessage.addListener((msg) => {
    console.log("Message received from external port:", msg);
  });

  port.postMessage({ message: "Hello, world!" });
});

chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
  console.log("Message received from external extension:", request);
});

chrome.runtime.onUpdateAvailable.addListener(() => {
  console.log("Update available!");
});

chrome.runtime.onRestartRequired.addListener(() => {
  console.log("Restart required!");
});

chrome.runtime.onBrowserUpdateAvailable.addListener(() => {
  console.log("Browser update available!");
});

chrome.runtime.onInstalled.addListener((details) => {
  console.log("Extension installed:", details);
});

chrome.runtime.onStartup.addListener(() => {
  console.log("Service Worker started!");
});

chrome.runtime.onSuspend.addListener(() => {
  console.log("Service Worker suspended!");
});

chrome.runtime.onSuspendCanceled.addListener(() => {
  console.log("Service Worker resumed!");
});

chrome.runtime.onConnect.addListener((port) => {
  console.log("Port connected:", port);

  port.onMessage.addListener((msg) => {
    console.log("Message received from port:", msg);
  });

  port.postMessage({ message: "Hello, world!" });
});

chrome.runtime.onConnectExternal.addListener((port) => {
  console.log("External port connected:", port);

  port.onMessage.addListener((msg) => {
    console.log("Message received from external port:", msg);
  });

  port.postMessage({ message: "Hello, world!" });
});

chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
  console.log("Message received from external extension:", request);
});

chrome.runtime.onUpdateAvailable.addListener(() => {
  console.log("Update available!");
});

chrome.runtime.onRestartRequired.addListener(() => {
  console.log("Restart required!");
});

chrome.runtime.onBrowserUpdateAvailable.addListener(() => {
    console.log("Browser update available!");
  });

  chrome.runtime.onInstalled.addListener((details) => {
    console.log("Extension installed:", details);
  });

  chrome.runtime.onStartup.addListener(() => {
    console.log("Service Worker started!");
  });

  chrome.runtime.onSuspend.addListener(() => {
    console.log("Service Worker suspended!");
  });

  chrome.runtime.onSuspendCanceled.addListener(() => {
    console.log("Service Worker resumed!");
  });

  chrome.runtime.onConnect.addListener((port) => {
    console.log("Port connected:", port);

    port.onMessage.addListener((msg) => {
      console.log("Message received from port:", msg);
    });

    port.postMessage({ message: "Hello, world!" });
  });

  chrome.runtime.onConnectExternal.addListener((port) => {
    console.log("External port connected:", port);

    port.onMessage.addListener((msg) => {
      console.log("Message received from external port:", msg);
    });

    port.postMessage({ message: "Hello, world!" });
  });

  chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
    console.log("Message received from external extension:", request);
  });

  chrome.runtime.onUpdateAvailable.addListener(() => {
    console.log("Update available!");
  });

  chrome.runtime.onRestartRequired.addListener(() => {
    console.log("Restart required!");
  });

  chrome.runtime.onBrowserUpdateAvailable.addListener(() => {
      console.log("Browser update available!");
    });

    chrome.runtime.onInstalled.addListener((details) => {
      console.log("Extension installed:", details);
    });

    chrome.runtime.onStartup.addListener(() => {
      console.log("Service Worker started!");
    });

    chrome.runtime.onSuspend.addListener(() => {
      console.log("Service Worker suspended!");
    });

    chrome.runtime.onSuspendCanceled.addListener(() => {
      console.log("Service Worker resumed!");
    });

    chrome.runtime.onConnect.addListener((port) => {
      console.log("Port connected:", port);

      port.onMessage.addListener((msg) => {
        console.log("Message received from port:", msg);
      });

      port.postMessage({ message: "Hello, world!" });
    });

    chrome.runtime.onConnectExternal.addListener((port) => {
      console.log("External port connected:", port);

      port.onMessage.addListener((msg) => {
        console.log("Message received from external port:", msg);
      });

          port.postMessage({ message: "Hello, world!" });
        });

        chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
          console.log("Message received from external extension:", request);
        });

        chrome.runtime.onUpdateAvailable.addListener(() => {
          console.log("Update available!");
        });

        chrome.runtime.onRestartRequired.addListener(() => {
          console.log("Restart required!");
        });

      chrome.runtime.onBrowserUpdateAvailable.addListener(() => {
        console.log("Browser update available!");
      });

      chrome.runtime.onInstalled.addListener((details) => {
        console.log("Extension installed:", details);
      });

      chrome.runtime.onStartup.addListener(() => {
        console.log("Service Worker started!");
      });

      chrome.runtime.onSuspend.addListener(() => {
        console.log("Service Worker suspended!");
      });

      chrome.runtime.onSuspendCanceled.addListener(() => {
        console.log("Service Worker resumed!");
      });

      chrome.runtime.onConnect.addListener((port) => {
        console.log("Port connected:", port);

        port.onMessage.addListener((msg) => {
          console.log("Message received from port:", msg);
        });

        port.postMessage({ message: "Hello, world!" });
      });

      chrome.runtime.onConnectExternal.addListener((port) => {
        console.log("External port connected:", port);

        port.onMessage.addListener((msg) => {
          console.log("Message received from external port:", msg);
        });

        port.postMessage({ message: "Hello, world!" });
      });

      chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
        console.log("Message received from external extension:", request);
      });

      chrome.runtime.onUpdateAvailable.addListener(() => {
        console.log("Update available!");
      });

      chrome.runtime.onRestartRequired.addListener(() => {
        console.log("Restart required!");
      });

      chrome.runtime.onBrowserUpdateAvailable.addListener(() => {
        console.log("Browser update available!");
      });

      chrome.runtime.onInstalled.addListener((details) => {
        console.log("Extension installed:", details);
      });

      chrome.runtime.onStartup.addListener(() => {
        console.log("Service Worker started!");
      });

      chrome.runtime.onSuspend.addListener(() => {
        console.log("Service Worker suspended!");
      });

      chrome.runtime.onSuspendCanceled.addListener(() => {
        console.log("Service Worker resumed!");
      });

      chrome.runtime.onConnect.addListener((port) => {
        console.log("Port connected:", port);

        port.onMessage.addListener((msg) => {
          console.log("Message received from port:", msg);
        });

        port.postMessage({ message: "Hello, world!" });
      });

      chrome.runtime.onConnectExternal.addListener((port) => {
        console.log("External port connected:", port);

        port.onMessage.addListener((msg) => {
          console.log("Message received from external port:", msg);
        });

        port.postMessage({ message: "Hello, world!" });
      });

      chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
        console.log("Message received from external extension:", request);
      });
