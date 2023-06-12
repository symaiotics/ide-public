<template>
  <section class="border-t border-transparent dark:border-gray-800">
    <div class="py-12 md:py-20">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h1 class="h2 font-red-hat-display mb-4">Get the Book</h1>
          <p class="text-xl text-gray-600 dark:text-gray-400">
           Start your journey to a new relationship with technology and your mind.
          </p>
        </div>
        <div id='product-component-1686276662256'></div>

        <div class="flex row  justify-center items-center">

          <div class="flex inline m-2 items-center">
            <a href="https://www.barnesandnoble.com/w/intelligent-digital-ecosystems-janak-alford/1143490086"><img width="150px" src="/images/Barnes-and-Noble-USA-768x768.png" /></a>
          </div>
          <div class="flex inline m-2">
            <a href="https://www.amazon.com/Intelligent-Digital-Ecosystems-Rethinking-Technology/dp/0228873029/"><img width="150px" src="/images/Amazon-Purchase-Book-768x768.png" /></a>
          </div>
          <div class="flex inline m-2">
            <a target = "blank" href="https://www.amazon.ca/Intelligent-Digital-Ecosystems-Rethinking-Technology/dp/0228873029"><img width="150px" src="/images/Amazon-Canada-Purchase-Book-768x768.png" /></a>
          </div>
          <div class="flex inline m-2">
            <a href="https://www.amazon.ca/Intelligent-Digital-Ecosystems-Rethinking-Technology-ebook/dp/B0C54MZ56D"><img width="150px" src="/images/Amazon-Kindle-Purchase-Book-768x768.png" /></a>
          </div>
          <div class="flex inline m-2">
            <a href="https://www.smashwords.com/books/view/1392631"><img width="150px" src="/images/Smashwords-Purchase-Book-768x768.png" /></a>
          </div>
        </div>


      </div>
    </div>

  </section>
</template>

<script setup>

import { ref, onMounted, onBeforeUnmount, computed, onUnmounted } from "vue";

let shopifyOptions = ref({
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "title": {
        "font-size": "26px",
        "color": document.documentElement.classList.contains('dark') ? "#ccc" : "#333"
      },
      "button": {
        "font-family": "Droid Sans, sans-serif",
        "font-weight": "bold",
        "font-size": "17px",
        "padding-top": "16.5px",
        "padding-bottom": "16.5px",
        ":hover": {
          "background-color": "#2b73a4"
        },
        "background-color": "#3080b6",
        ":focus": {
          "background-color": "#2b73a4"
        }
      },
      "quantityInput": {
        "font-size": "17px",
        "padding-top": "16.5px",
        "padding-bottom": "16.5px"
      },
      "price": {
        "font-size": "18px",
        "color": document.documentElement.classList.contains('dark') ? "#ccc" : "#333"
      },
      "compareAt": {
        "font-size": "15.299999999999999px",
        "color": document.documentElement.classList.contains('dark') ? "#ccc" : "#333"
      },
      "unitPrice": {
        "font-size": "15.299999999999999px",
        "color": document.documentElement.classList.contains('dark') ? "#ccc" : "#333"
      },
      "description": {
        "color": document.documentElement.classList.contains('dark') ? "#ccc" : "#333"
      }
    },
    "buttonDestination": "checkout",
    "layout": "horizontal",
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "description": true
    },
    "width": "100%",
    "text": {
      "button": "Buy now"
    },
    "googleFonts": [
      "Droid Sans"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-family": "Droid Sans, sans-serif",
        "font-weight": "bold",
        "font-size": "17px",
        "padding-top": "16.5px",
        "padding-bottom": "16.5px",
        ":hover": {
          "background-color": "#2b73a4"
        },
        "background-color": "#3080b6",
        ":focus": {
          "background-color": "#2b73a4"
        }
      },
      "quantityInput": {
        "font-size": "17px",
        "padding-top": "16.5px",
        "padding-bottom": "16.5px"
      },
      "title": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "bold",
        "font-size": "26px",
        "color": "#4c4c4c"
      },
      "price": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "font-size": "18px",
        "color": "#4c4c4c"
      },
      "compareAt": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "font-size": "15.299999999999999px",
        "color": "#4c4c4c"
      },
      "unitPrice": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "font-size": "15.299999999999999px",
        "color": "#4c4c4c"
      },
      "description": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "font-size": "14px",
        "color": "#4c4c4c"
      }
    },
    "googleFonts": [
      "Droid Sans"
    ],
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-family": "Droid Sans, sans-serif",
        "font-weight": "bold",
        "font-size": "17px",
        "padding-top": "16.5px",
        "padding-bottom": "16.5px",
        ":hover": {
          "background-color": "#2b73a4"
        },
        "background-color": "#3080b6",
        ":focus": {
          "background-color": "#2b73a4"
        }
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "popup": false,
    "googleFonts": [
      "Droid Sans"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Droid Sans, sans-serif",
        "font-weight": "bold",
        "background-color": "#3080b6",
        ":hover": {
          "background-color": "#2b73a4"
        },
        ":focus": {
          "background-color": "#2b73a4"
        }
      },
      "count": {
        "font-size": "17px"
      }
    },
    "googleFonts": [
      "Droid Sans"
    ]
  }
}
)

let loaded = ref(false)

onMounted(() => {
  // effectVisualizer('effect1', 'effectParent')

  if (window.ShopifyBuy ) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

})

onBeforeUnmount(()=>{
  const element = document.getElementById("product-component-1686276662256");
  while (element.firstChild) {
    element.removeChild(element.lastChild);
  }
})

function loadScript() {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  var script = document.createElement('script');
  script.async = true;
  script.src = scriptURL;
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
  script.onload = ShopifyBuyInit;
  loaded.value = true;
}
function ShopifyBuyInit() {
  var client = ShopifyBuy.buildClient({
    domain: 'symaiotics.myshopify.com',
    storefrontAccessToken: '02c98a504ad7b511bb9fd8be289ce367',
  });
  ShopifyBuy.UI.onReady(client).then(function (ui) {
    ui.createComponent('product', {
      id: '8376426496300',
      node: document.getElementById('product-component-1686276662256'),
      moneyFormat: '%24%7B%7Bamount%7D%7D',
      options: shopifyOptions.value,
    });
  });
  loaded.value = true;
}



</script>