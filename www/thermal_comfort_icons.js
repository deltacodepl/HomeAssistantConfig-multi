const TC_ICONS_MAP = {
  "dew-point": {
    keywords: ["thermometer", "water", "dew"],
    path: "M 9.0019531 2 C 7.3419531 2 6.0019531 3.3401576 6.0019531 5 L 6.0019531 12.998047 C 3.7919531 14.657889 3.3419531 17.788257 5.0019531 19.998047 C 6.0394531 21.379166 7.6514643 22.073332 9.2539062 21.994141 C 9.4141503 21.986241 9.574899 21.970726 9.734375 21.947266 C 10.53175 21.829955 11.311328 21.516748 12.001953 20.998047 C 14.211953 19.338204 14.661953 16.207837 13.001953 13.998047 C 12.721953 13.618083 12.381953 13.27802 12.001953 12.998047 L 12.001953 5 C 12.001953 3.3401576 10.661954 2 9.0019531 2 z M 9.0019531 4 C 9.5519531 4 10.001953 4.4500522 10.001953 5 L 10.001953 8 L 8.0019531 8 L 8.0019531 5 C 8.0019531 4.931256 8.0080544 4.8637634 8.0214844 4.7988281 C 8.1151344 4.3442814 8.5207031 4 9.0019531 4 z M 17.5 7 C 17.5 7 14.35351 10.542402 14.029297 12.898438 C 14.090637 12.962858 14.149842 13.02946 14.203125 13.101562 C 14.881334 14.005703 15.283868 15.033219 15.429688 16.083984 C 16.023524 16.522682 16.747091 16.769541 17.5 16.771484 C 19.432973 16.771484 20.999967 15.20449 21 13.271484 C 21 10.938111 17.5 7 17.5 7 z ",
  },
  "dew-point-alternative": {
    keywords: ["thermometer", "water-opacity", "dew"],
    path: "M 9.0019531 2 C 7.3419531 2 6.0019531 3.3401576 6.0019531 5 L 6.0019531 12.998047 C 3.7919531 14.657889 3.3419531 17.788257 5.0019531 19.998047 C 6.6619531 22.207838 9.7919527 22.657889 12.001953 20.998047 C 14.211953 19.338204 14.661953 16.207837 13.001953 13.998047 C 12.721953 13.618083 12.381953 13.27802 12.001953 12.998047 L 12.001953 5 C 12.001953 3.3401576 10.661955 2 9.0019531 2 z M 9.0019531 4 C 9.5519531 4 10.001953 4.4500522 10.001953 5 L 10.001953 8 L 8.0019531 8 L 8.0019531 5 C 8.0019531 4.4500522 8.4519531 4 9.0019531 4 z M 17.5 7 C 17.5 7 14.35351 10.542379 14.029297 12.898438 C 14.090637 12.962858 14.149842 13.02946 14.203125 13.101562 C 14.882209 14.00687 15.286301 15.035711 15.431641 16.087891 C 16.01163 16.515315 16.725345 16.771484 17.5 16.771484 L 17.5 15.603516 L 18.666016 15.603516 L 18.666016 14.4375 L 17.5 14.4375 L 17.5 13.271484 L 18.666016 13.271484 L 18.666016 12.103516 L 17.5 12.103516 L 17.5 10.9375 L 18.666016 10.9375 L 18.666016 9.7714844 L 17.5 9.7714844 L 17.5 8.6035156 L 18.666016 8.6035156 L 18.666016 8.4472656 C 18.024351 7.5897404 17.5 7 17.5 7 z M 18.666016 8.6035156 L 18.666016 9.7714844 L 19.587891 9.7714844 C 19.319557 9.3573044 19.045702 8.9593599 18.783203 8.6035156 L 18.666016 8.6035156 z M 18.666016 10.9375 L 18.666016 12.103516 L 19.833984 12.103516 L 19.833984 10.9375 L 18.666016 10.9375 z M 19.833984 10.9375 L 20.265625 10.9375 C 20.125625 10.680829 19.985652 10.418808 19.833984 10.167969 L 19.833984 10.9375 z M 19.833984 12.103516 L 19.833984 13.271484 L 21 13.271484 C 21 12.91564 20.91344 12.517693 20.773438 12.103516 L 19.833984 12.103516 z M 19.833984 13.271484 L 18.666016 13.271484 L 18.666016 14.4375 L 19.833984 14.4375 L 19.833984 13.271484 z M 19.833984 14.4375 L 19.833984 15.603516 L 20.101562 15.603516 C 20.416563 15.265172 20.643254 14.875013 20.794922 14.4375 L 19.833984 14.4375 z M 19.833984 15.603516 L 18.666016 15.603516 L 18.666016 16.566406 C 19.103517 16.414733 19.495652 16.188058 19.833984 15.873047 L 19.833984 15.603516 z ",
  },
  "dew-point-perception": {
    keywords: ["human", "thermometer", "water", "dew", "perception"],
    path: "M 6.5 2 A 2 2 0 0 0 4.5 4 A 2 2 0 0 0 6.5 6 A 2 2 0 0 0 8.5 4 A 2 2 0 0 0 6.5 2 z M 14 5 C 13 5 12.199219 5.8007813 12.199219 6.8007812 L 12.199219 13.599609 C 11.499219 14.099609 11 15 11 16 C 11 17.7 12.3 19 14 19 C 14.053125 19 14.105887 18.998605 14.158203 18.996094 C 15.780008 18.918234 17 17.646875 17 16 C 17 15 16.500781 14.099609 15.800781 13.599609 L 15.800781 6.8007812 C 15.800781 5.8007812 15 5 14 5 z M 14 6 C 14.4 6 14.800781 6.3007813 14.800781 6.8007812 L 14.800781 8 L 13.300781 8 L 13.300781 6.8007812 L 13.199219 6.8007812 C 13.199219 6.7695312 13.202051 6.7386475 13.205078 6.7089844 C 13.250488 6.2640381 13.625 6 14 6 z M 5 7 A 2 2 0 0 0 3 9 L 3 14.5 L 4.5 14.5 L 4.5 22 L 8.5 22 L 8.5 14.5 L 10 14.5 L 10 9 A 2 2 0 0 0 8 7 L 5 7 z M 19.255859 9.2851562 C 19.255859 9.2851562 17 11.8256 17 13.330078 C 17.0047 13.390888 17.011874 13.451487 17.021484 13.511719 C 17.418581 13.971362 17.729274 14.510441 17.886719 15.117188 C 18.279267 15.4195 18.760396 15.584222 19.255859 15.585938 C 20.502303 15.586543 21.513199 14.576522 21.513672 13.330078 C 21.513672 11.8256 19.255859 9.2851562 19.255859 9.2851562 z ",
  },
  "dew-point-perception-hand": {
    keywords: ["hand", "thermometer", "water", "dew", "perception"],
    path: "M 9.8457031 5 L 5.3886719 8.6757812 L 4.1972656 13.4375 L 9.4511719 16.470703 L 10.107422 15.332031 L 10.988281 10.181641 C 11.042901 9.8083806 10.91096 9.5316314 10.595703 9.3496094 C 10.412775 9.2439854 10.216532 9.2178034 10.003906 9.2714844 C 9.7912692 9.3251344 9.6207287 9.4505395 9.4960938 9.6484375 L 8.5527344 11.283203 L 8.3535156 12.529297 L 7.6933594 12.404297 L 7.96875 10.945312 L 10.328125 6.859375 C 10.521377 6.5246392 10.569698 6.1730683 10.46875 5.8085938 C 10.367817 5.4441191 10.159319 5.1758831 9.8457031 5 z M 13 5 C 12.585215 5 12.20565 5.1404324 11.902344 5.3730469 C 11.905844 5.3848329 11.910742 5.3964011 11.914062 5.4082031 C 12.11324 6.1273329 11.993362 6.9747192 11.626953 7.609375 L 11.361328 8.0683594 C 12.080907 8.4977448 12.59134 9.5874198 12.472656 10.398438 L 12.46875 10.416016 L 11.541016 15.849609 L 10.824219 17.089844 L 10.488281 17.673828 C 11.016583 18.481467 11.928427 19 13 19 C 13.05312 19 13.105887 18.998594 13.158203 18.996094 C 14.780008 18.918218 16 17.646875 16 16 C 16 15 15.500781 14.099609 14.800781 13.599609 L 14.800781 6.8007812 C 14.800781 5.8007812 14 5 13 5 z M 13 6 C 13.4 6 13.800781 6.3007814 13.800781 6.8007812 L 13.800781 8 L 12.300781 8 L 12.300781 6.8007812 L 12.199219 6.8007812 C 12.199219 6.7695312 12.201978 6.7386474 12.205078 6.7089844 C 12.250407 6.2640385 12.625 6 13 6 z M 18.255859 9.2851562 C 18.255859 9.2851562 16 11.8256 16 13.330078 C 16.0047 13.390888 16.011874 13.451487 16.021484 13.511719 C 16.418581 13.971362 16.729274 14.510441 16.886719 15.117188 C 17.279267 15.4195 17.760396 15.584223 18.255859 15.585938 C 19.502303 15.586543 20.513199 14.576522 20.513672 13.330078 C 20.513672 11.8256 18.255859 9.2851562 18.255859 9.2851562 z M 2.3535156 13.931641 L 1 16.275391 L 7.421875 19.982422 L 8.7753906 17.638672 L 2.3535156 13.931641 z ",
  },
  "frost-point": {
    keywords: ["thermometer", "snowflake"],
    path: "M 9.0019531 2 C 7.3419531 2 6.0019531 3.3401576 6.0019531 5 L 6.0019531 12.998047 C 3.7919531 14.657889 3.3419531 17.788257 5.0019531 19.998047 C 6.6619531 22.207838 9.7919526 22.657889 12.001953 20.998047 C 14.211953 19.338204 14.661953 16.207837 13.001953 13.998047 C 12.721953 13.618083 12.381953 13.27802 12.001953 12.998047 L 12.001953 5 C 12.001953 3.3401576 10.661953 2 9.0019531 2 z M 9.0019531 4 C 9.5519531 4 10.001953 4.4500522 10.001953 5 L 10.001953 8 L 8.0019531 8 L 8.0019531 5 C 8.0019531 4.4500522 8.4519531 4 9.0019531 4 z M 17.304688 7 L 16.541016 7.7578125 L 17.460938 8.6757812 L 17.460938 9.890625 L 16.117188 10.664062 L 15.041016 10.056641 L 14.730469 8.8046875 L 13.699219 9.0859375 L 13.951172 10.035156 L 13.501953 10.154297 L 13.501953 11.267578 L 14.53125 10.992188 L 15.605469 11.599609 L 15.605469 13.152344 L 14.609375 13.714844 C 14.793314 14.028896 14.946429 14.355021 15.072266 14.6875 L 16.142578 14.082031 L 17.460938 14.855469 L 17.460938 16.070312 L 16.541016 16.990234 L 17.304688 17.748047 L 17.998047 17.054688 L 18.691406 17.748047 L 19.447266 16.990234 L 18.535156 16.070312 L 18.535156 14.855469 L 19.878906 14.076172 L 20.953125 14.683594 L 21.285156 15.935547 L 22.296875 15.662109 L 22.042969 14.710938 L 22.994141 14.458984 L 22.720703 13.421875 L 21.46875 13.753906 L 20.394531 13.146484 L 20.394531 11.599609 L 21.46875 10.992188 L 22.720703 11.326172 L 23 10.289062 L 22.048828 10.035156 L 22.296875 9.0859375 L 21.259766 8.8046875 L 20.925781 10.056641 L 19.851562 10.664062 L 18.535156 9.890625 L 18.535156 8.6757812 L 19.453125 7.7578125 L 18.691406 7 L 17.998047 7.6933594 L 17.304688 7 z M 17.998047 10.820312 L 19.339844 11.599609 L 19.339844 13.146484 L 17.998047 13.925781 L 16.654297 13.146484 L 16.654297 11.599609 L 17.998047 10.820312 z ",
  },
  "heat-index": {
    keywords: ["thermometer", "fire", "heat"],
    path: "M 9.0019531 2 C 7.3421109 2 6.0019531 3.3401576 6.0019531 5 L 6.0019531 12.998047 C 3.7921631 14.657889 3.3421111 17.788257 5.0019531 19.998047 C 6.6617961 22.207838 9.792163 22.657889 12.001953 20.998047 C 14.211744 19.338204 14.661795 16.207837 13.001953 13.998047 C 12.721979 13.618083 12.381917 13.27802 12.001953 12.998047 L 12.001953 5 C 12.001953 3.3401576 10.661796 2 9.0019531 2 z M 9.0019531 4 C 9.5519009 4 10.001953 4.4500522 10.001953 5 L 10.001953 8 L 8.0019531 8 L 8.0019531 5 C 8.0019531 4.4500522 8.4520049 4 9.0019531 4 z M 18.121094 6 C 17.578336 6.1314102 17.102906 6.428237 16.697266 6.7539062 C 15.217537 7.9423113 14.635016 10.040093 15.332031 11.839844 C 15.354891 11.896974 15.378906 11.953065 15.378906 12.027344 C 15.378906 12.153041 15.291996 12.266792 15.177734 12.3125 C 15.04633 12.36963 14.909333 12.335561 14.800781 12.244141 C 14.766511 12.215571 14.743563 12.188428 14.720703 12.148438 C 14.075114 11.331404 13.972043 10.15967 14.40625 9.2226562 C 14.033387 9.5263191 13.732283 9.9145439 13.501953 10.345703 L 13.501953 12.402344 C 13.738625 12.633958 14.005842 12.834572 14.203125 13.101562 C 14.853941 13.969266 15.250196 14.950549 15.410156 15.957031 C 15.730644 16.09518 16.066361 16.195275 16.412109 16.238281 C 17.634742 16.392545 18.943888 16.169821 19.880859 15.324219 C 20.926381 14.375779 21.29095 12.855409 20.753906 11.552734 L 20.679688 11.404297 C 20.559687 11.141474 20.240234 10.685547 20.240234 10.685547 C 20.108829 10.514141 19.949325 10.365348 19.800781 10.216797 C 19.417975 9.8739855 18.982833 9.627529 18.617188 9.2675781 C 17.765913 8.433409 17.578336 7.0569967 18.121094 6 z M 17.291016 10.537109 C 17.399566 10.754221 17.515227 10.971173 17.652344 11.142578 C 18.092263 11.713928 18.783097 11.965154 18.931641 12.742188 C 18.954501 12.822178 18.966797 12.902581 18.966797 12.988281 C 18.983937 13.456789 18.776389 13.970911 18.433594 14.285156 C 18.273522 14.422018 18.011852 14.569946 17.806641 14.626953 C 17.166759 14.855491 16.525512 14.535293 16.148438 14.158203 C 16.828314 13.998226 17.235491 13.496782 17.355469 12.988281 C 17.452599 12.531201 17.269589 12.152829 17.195312 11.712891 C 17.126752 11.290093 17.136766 10.931339 17.291016 10.537109 z ",
  },
  "heat-index-perception": {
    keywords: [
      "thermal-perception",
      "heat-index",
      "human",
      "thermometer",
      "fire",
    ],
    path: "M 6.5 2 A 2 2 0 0 0 4.5 4 A 2 2 0 0 0 6.5 6 A 2 2 0 0 0 8.5 4 A 2 2 0 0 0 6.5 2 z M 14 5 C 13 5 12.199219 5.8007814 12.199219 6.8007812 L 12.199219 13.599609 C 11.499219 14.099609 11 15 11 16 C 11 17.7 12.3 19 14 19 C 14.053125 19 14.105887 18.998605 14.158203 18.996094 C 15.780008 18.918234 17 17.646875 17 16 C 17 15 16.500781 14.099609 15.800781 13.599609 L 15.800781 6.8007812 C 15.800781 5.8007812 15 5 14 5 z M 14 6 C 14.4 6 14.800781 6.3007814 14.800781 6.8007812 L 14.800781 8 L 13.300781 8 L 13.300781 6.8007812 L 13.199219 6.8007812 C 13.199219 6.7695312 13.202051 6.7386475 13.205078 6.7089844 C 13.250488 6.2640381 13.625 6 14 6 z M 5 7 A 2 2 0 0 0 3 9 L 3 14.5 L 4.5 14.5 L 4.5 22 L 8.5 22 L 8.5 14.5 L 10 14.5 L 10 9 A 2 2 0 0 0 8 7 L 5 7 z M 20.234375 9 C 19.854441 9.091988 19.520279 9.2993731 19.236328 9.5273438 C 18.200508 10.359235 17.793335 11.828054 18.28125 13.087891 C 18.29725 13.127881 18.314453 13.166759 18.314453 13.21875 C 18.314453 13.30674 18.25381 13.385973 18.173828 13.417969 C 18.081848 13.457959 17.986143 13.435084 17.910156 13.371094 C 17.886166 13.351094 17.869516 13.332676 17.853516 13.304688 C 17.401602 12.732756 17.328865 11.911775 17.632812 11.255859 C 17.371807 11.468425 17.161233 11.741155 17 12.042969 L 17 13.482422 C 17.165672 13.644553 17.352135 13.783808 17.490234 13.970703 C 17.94581 14.578101 18.223963 15.266159 18.335938 15.970703 C 18.560281 16.067413 18.795084 16.135911 19.037109 16.166016 C 19.89296 16.274002 20.808958 16.119274 21.464844 15.527344 C 22.196716 14.86343 22.452106 13.798599 22.076172 12.886719 L 22.025391 12.783203 C 21.941391 12.599225 21.716797 12.279297 21.716797 12.279297 C 21.624817 12.159312 21.514138 12.055159 21.410156 11.951172 C 21.142192 11.711197 20.836032 11.539077 20.580078 11.287109 C 19.98418 10.703186 19.854441 9.7399047 20.234375 9 z M 19.652344 12.175781 C 19.728324 12.327761 19.810267 12.479625 19.90625 12.599609 C 20.214196 12.999558 20.696799 13.174821 20.800781 13.71875 C 20.816781 13.77474 20.826172 13.832588 20.826172 13.892578 C 20.838172 14.220537 20.693083 14.578855 20.453125 14.798828 C 20.341073 14.894628 20.157321 14.999159 20.013672 15.039062 C 19.565751 15.199041 19.11747 14.974903 18.853516 14.710938 C 19.329433 14.598952 19.613281 14.248532 19.697266 13.892578 C 19.765256 13.572619 19.637929 13.307959 19.585938 13 C 19.537948 12.704039 19.544374 12.451745 19.652344 12.175781 z ",
  },
  "heat-index-perception-hand": {
    keywords: [
      "thermal-perception",
      "heat-index",
      "hand",
      "thermometer",
      "fire",
    ],
    path: "M 9.8457031 5 L 5.3886719 8.6757812 L 4.1972656 13.4375 L 9.4511719 16.470703 L 10.107422 15.332031 L 10.988281 10.181641 C 11.042901 9.8083806 10.91096 9.5316314 10.595703 9.3496094 C 10.412775 9.2439854 10.216532 9.2178034 10.003906 9.2714844 C 9.7912692 9.3251344 9.6207287 9.4505395 9.4960938 9.6484375 L 8.5527344 11.283203 L 8.3535156 12.529297 L 7.6933594 12.404297 L 7.96875 10.945312 L 10.328125 6.859375 C 10.521377 6.5246392 10.569698 6.1730683 10.46875 5.8085938 C 10.367817 5.4441191 10.159319 5.1758831 9.8457031 5 z M 13 5 C 12.585215 5 12.20565 5.1404324 11.902344 5.3730469 C 11.905844 5.3848329 11.910742 5.3964011 11.914062 5.4082031 C 12.11324 6.1273329 11.993362 6.9747192 11.626953 7.609375 L 11.361328 8.0683594 C 12.080907 8.4977448 12.59134 9.5874198 12.472656 10.398438 L 12.46875 10.416016 L 11.541016 15.849609 L 10.824219 17.089844 L 10.488281 17.673828 C 11.016583 18.481467 11.928427 19 13 19 C 13.05312 19 13.105887 18.998594 13.158203 18.996094 C 14.780008 18.918218 16 17.646875 16 16 C 16 15 15.500781 14.099609 14.800781 13.599609 L 14.800781 6.8007812 C 14.800781 5.8007812 14 5 13 5 z M 13 6 C 13.4 6 13.800781 6.3007814 13.800781 6.8007812 L 13.800781 8 L 12.300781 8 L 12.300781 6.8007812 L 12.199219 6.8007812 C 12.199219 6.7695312 12.201978 6.7386474 12.205078 6.7089844 C 12.250407 6.2640385 12.625 6 13 6 z M 19.083984 9 C 18.704054 9.09198 18.371839 9.2993848 18.087891 9.5273438 C 17.052081 10.359191 16.644903 11.828122 17.132812 13.087891 C 17.148812 13.127891 17.164062 13.166761 17.164062 13.21875 C 17.164062 13.30673 17.105372 13.387929 17.025391 13.419922 C 16.933411 13.459922 16.835752 13.435084 16.759766 13.371094 C 16.735766 13.351094 16.721068 13.330724 16.705078 13.302734 C 16.253161 12.730838 16.180431 11.911739 16.484375 11.255859 C 16.196619 11.490199 15.966737 11.79508 15.800781 12.134766 L 15.800781 13.273438 C 16.473625 13.955808 16.962148 14.839786 16.996094 15.884766 C 17.275222 16.030334 17.577748 16.127344 17.888672 16.166016 C 18.744516 16.273996 19.660527 16.119226 20.316406 15.527344 C 21.048273 14.863465 21.303664 13.798552 20.927734 12.886719 L 20.875 12.783203 C 20.79102 12.599237 20.568359 12.279297 20.568359 12.279297 C 20.476376 12.159319 20.363747 12.055154 20.259766 11.951172 C 19.991815 11.711217 19.687594 11.539063 19.431641 11.287109 C 18.83575 10.703216 18.704054 9.739864 19.083984 9 z M 18.503906 12.175781 C 18.579886 12.327753 18.659876 12.479631 18.755859 12.599609 C 19.063802 12.999536 19.548362 13.17485 19.652344 13.71875 C 19.668344 13.77474 19.675781 13.830636 19.675781 13.890625 C 19.687781 14.218565 19.544645 14.578868 19.304688 14.798828 C 19.192708 14.894808 19.009208 14.999069 18.865234 15.039062 C 18.417316 15.199034 17.96903 14.974891 17.705078 14.710938 C 18.180991 14.598957 18.464843 14.24656 18.548828 13.890625 C 18.616808 13.570684 18.487538 13.307943 18.435547 13 C 18.387547 12.704053 18.395916 12.45173 18.503906 12.175781 z M 2.3535156 13.931641 L 1 16.275391 L 7.421875 19.982422 L 8.7753906 17.638672 L 2.3535156 13.931641 z ",
  },
  "simmer-index": {
    keywords: ["thermometer", "power-sleep"],
    path: "M 9.0019531 2 C 7.3421111 2 6.0019531 3.3401576 6.0019531 5 L 6.0019531 12.998047 C 3.7921631 14.657889 3.3421111 17.788257 5.0019531 19.998047 C 6.6617961 22.207838 9.792163 22.657889 12.001953 20.998047 C 14.211744 19.338204 14.661795 16.207837 13.001953 13.998047 C 12.721979 13.618083 12.381917 13.27802 12.001953 12.998047 L 12.001953 5 C 12.001953 3.3401576 10.661796 2 9.0019531 2 z M 9.0019531 4 C 9.5519011 4 10.001953 4.4500522 10.001953 5 L 10.001953 8 L 8.0019531 8 L 8.0019531 5 C 8.0019531 4.4500522 8.4520061 4 9.0019531 4 z M 17.71875 6 C 16.415926 6.1147848 15.210143 6.7174484 14.332031 7.6816406 C 13.988023 8.0628337 13.71212 8.4809915 13.501953 8.921875 L 13.501953 12.402344 C 13.738625 12.633958 14.005842 12.834572 14.203125 13.101562 C 14.743615 13.822173 15.108178 14.622464 15.308594 15.449219 C 17.412971 16.851161 20.264076 16.532943 22 14.609375 L 21.580078 14.609375 C 20.305953 14.609375 19.072228 14.144327 18.136719 13.294922 C 15.995957 11.389443 15.819039 8.1235162 17.71875 6 z ",
  },
  "simmer-zone": {
    keywords: ["human", "thermometer", "power-sleep", "perception"],
    path: "M 6.5 2 A 2 2 0 0 0 4.5 4 A 2 2 0 0 0 6.5 6 A 2 2 0 0 0 8.5 4 A 2 2 0 0 0 6.5 2 z M 14 5 C 13 5 12.199219 5.8007813 12.199219 6.8007812 L 12.199219 13.599609 C 11.499219 14.099609 11 15 11 16 C 11 17.7 12.3 19 14 19 C 14.053125 19 14.105887 18.998605 14.158203 18.996094 C 15.780008 18.918234 17 17.646875 17 16 C 17 15 16.500781 14.099609 15.800781 13.599609 L 15.800781 6.8007812 C 15.800781 5.8007812 15 5 14 5 z M 14 6 C 14.4 6 14.800781 6.3007813 14.800781 6.8007812 L 14.800781 8 L 13.300781 8 L 13.300781 6.8007812 L 13.199219 6.8007812 C 13.199219 6.7695312 13.202051 6.7386475 13.205078 6.7089844 C 13.250488 6.2640381 13.625 6 14 6 z M 5 7 A 2 2 0 0 0 3 9 L 3 14.5 L 4.5 14.5 L 4.5 22 L 8.5 22 L 8.5 14.5 L 10 14.5 L 10 9 A 2 2 0 0 0 8 7 L 5 7 z M 20.001953 9 C 19.089988 9.080349 18.24553 9.5028006 17.630859 10.177734 C 17.360634 10.477172 17.152332 10.80967 17 11.160156 L 17 13.107422 C 17.594256 13.778157 18.048689 14.578749 18.167969 15.513672 C 19.652567 16.61221 21.74395 16.419183 23 15.027344 L 22.705078 15.027344 C 21.813202 15.027344 20.94977 14.702006 20.294922 14.107422 C 18.79641 12.77362 18.672172 10.486461 20.001953 9 z ",
  },
  "simmer-zone-hand": {
    keywords: ["hand", "thermometer", "power-sleep", "perception"],
    path: "M 9.8457031 5 L 5.3886719 8.6757812 L 4.1972656 13.4375 L 9.4511719 16.470703 L 10.107422 15.332031 L 10.988281 10.181641 C 11.042901 9.8083806 10.91096 9.5316314 10.595703 9.3496094 C 10.412775 9.2439854 10.216532 9.2178034 10.003906 9.2714844 C 9.7912692 9.3251344 9.6207287 9.4505395 9.4960938 9.6484375 L 8.5527344 11.283203 L 8.3535156 12.529297 L 7.6933594 12.404297 L 7.96875 10.945312 L 10.328125 6.859375 C 10.521377 6.5246392 10.569698 6.1730683 10.46875 5.8085938 C 10.367817 5.4441191 10.159319 5.1758831 9.8457031 5 z M 13 5 C 12.585215 5 12.20565 5.1404324 11.902344 5.3730469 C 11.905844 5.3848329 11.910742 5.3964011 11.914062 5.4082031 C 12.11324 6.1273329 11.993362 6.9747192 11.626953 7.609375 L 11.361328 8.0683594 C 12.080907 8.4977448 12.59134 9.5874198 12.472656 10.398438 L 12.46875 10.416016 L 11.541016 15.849609 L 10.824219 17.089844 L 10.488281 17.673828 C 11.016583 18.481467 11.928427 19 13 19 C 13.05312 19 13.105887 18.998594 13.158203 18.996094 C 14.780008 18.918218 16 17.646875 16 16 C 16 15 15.500781 14.099609 14.800781 13.599609 L 14.800781 6.8007812 C 14.800781 5.8007812 14 5 13 5 z M 13 6 C 13.4 6 13.800781 6.3007814 13.800781 6.8007812 L 13.800781 8 L 12.300781 8 L 12.300781 6.8007812 L 12.199219 6.8007812 C 12.199219 6.7695312 12.201978 6.7386474 12.205078 6.7089844 C 12.250407 6.2640385 12.625 6 13 6 z M 19.001953 9 C 18.089988 9.08035 17.24553 9.5028018 16.630859 10.177734 C 16.360634 10.477172 16.152332 10.80967 16 11.160156 L 16 13.107422 C 16.594256 13.778157 17.048689 14.578749 17.167969 15.513672 C 18.652567 16.61221 20.74395 16.419183 22 15.027344 L 21.705078 15.027344 C 20.813202 15.027344 19.94977 14.702006 19.294922 14.107422 C 17.79641 12.77362 17.672172 10.486461 19.001953 9 z M 2.3535156 13.931641 L 1 16.275391 L 7.421875 19.982422 L 8.7753906 17.638672 L 2.3535156 13.931641 z ",
  },
  "thermal-perception": {
    keywords: ["thermal-perception", "human", "male", "thermometer"],
    path: "m 8.5,2.0000002 c -1.1045695,0 -2,0.8954305 -2,2 0,1.1045695 0.8954305,2 2,2 1.10457,0 2,-0.8954305 2,-2 0,-1.1045695 -0.89543,-2 -2,-2 z m 7.5,3 c -1,0 -1.800781,0.8007814 -1.800781,1.8007812 V 13.599609 C 13.499219,14.099609 13,15 13,16 c 0,1.7 1.3,3 3,3 0.05312,0 0.105887,-0.0014 0.158203,-0.0039 C 17.780008,18.91823 19,17.646875 19,16 19,15 18.500781,14.099609 17.800781,13.599609 V 6.8007814 C 17.800781,5.8007814 17,5.0000002 16,5.0000002 Z m 0,1 c 0.4,0 0.800781,0.3007814 0.800781,0.8007812 v 1.1992188 h -1.5 V 6.8007814 h -0.101562 c 0,-0.03125 0.0028,-0.062134 0.0059,-0.091797 C 15.250489,6.2640383 15.625,6.0000002 16,6.0000002 Z m -9,1 c -1.1045693,0 -1.9999998,0.8954303 -2,1.9999996 V 14.5 H 6.5 V 22 h 4 V 14.5 H 12 V 8.9999998 C 12,7.8954305 11.104569,7.0000002 10,7.0000002 Z",
  },
  "thermal-perception-alternative": {
    keywords: ["thermal-perception", "human", "thermometer", "sun"],
    path: "M 6.5 2 A 2 2 0 0 0 4.5 4 A 2 2 0 0 0 6.5 6 A 2 2 0 0 0 8.5 4 A 2 2 0 0 0 6.5 2 z M 14 5 C 13 5 12.199219 5.8007813 12.199219 6.8007812 L 12.199219 13.599609 C 11.499219 14.099609 11 15 11 16 C 11 17.7 12.3 19 14 19 C 14.053125 19 14.105887 18.998605 14.158203 18.996094 C 15.780008 18.918234 17 17.646875 17 16 C 17 15 16.500781 14.099609 15.800781 13.599609 L 15.800781 6.8007812 C 15.800781 5.8007812 15 5 14 5 z M 14 6 C 14.4 6 14.800781 6.3007813 14.800781 6.8007812 L 14.800781 8 L 13.300781 8 L 13.300781 6.8007812 L 13.199219 6.8007812 C 13.199219 6.7695312 13.202051 6.7386475 13.205078 6.7089844 C 13.250488 6.2640381 13.625 6 14 6 z M 5 7 A 2 2 0 0 0 3 9 L 3 14.5 L 4.5 14.5 L 4.5 22 L 8.5 22 L 8.5 14.5 L 10 14.5 L 10 9 A 2 2 0 0 0 8 7 L 5 7 z M 19.001953 8 L 17.898438 9.5800781 C 18.240436 9.4553041 18.613737 9.3867188 19.001953 9.3867188 C 19.390168 9.3867188 19.765423 9.4552891 20.107422 9.5800781 L 19.001953 8 z M 21.082031 10.144531 C 21.359327 10.380227 21.604719 10.671157 21.798828 11.003906 C 21.992934 11.341275 22.116951 11.697402 22.181641 12.0625 L 23 10.310547 L 21.082031 10.144531 z M 19.001953 10.310547 C 17.970938 10.310547 17.098309 10.98564 16.800781 11.917969 L 16.800781 13.273438 C 17.1534 13.631049 17.454968 14.043526 17.667969 14.505859 C 18.045134 14.773493 18.50427 14.931641 19.001953 14.931641 C 20.278177 14.931641 21.3125 13.897286 21.3125 12.621094 C 21.3125 11.344901 20.278177 10.310547 19.001953 10.310547 z M 22.177734 13.181641 C 22.113034 13.546741 21.987077 13.900912 21.792969 14.238281 C 21.598863 14.571029 21.354706 14.861961 21.082031 15.097656 L 22.996094 14.931641 L 22.177734 13.181641 z M 20.097656 15.652344 C 19.755657 15.77712 19.380924 15.857422 19.001953 15.857422 C 18.640809 15.857422 18.300428 15.789052 17.984375 15.683594 C 17.987975 15.723224 17.991841 15.762614 17.994141 15.802734 L 19.001953 17.242188 L 20.097656 15.652344 z ",
  },
  "thermal-perception-hand": {
    keywords: ["hand", "thermometer"],
    path: "M 11.845703 5 L 7.3886719 8.6757812 L 6.1972656 13.4375 L 11.451172 16.470703 L 12.107422 15.332031 L 12.988281 10.181641 C 13.042901 9.8083798 12.91096 9.5316314 12.595703 9.3496094 C 12.412775 9.2439854 12.216532 9.2178034 12.003906 9.2714844 C 11.791269 9.3251344 11.620729 9.4505395 11.496094 9.6484375 L 10.552734 11.283203 L 10.353516 12.529297 L 9.6933594 12.404297 L 9.96875 10.945312 L 12.328125 6.859375 C 12.521377 6.5246392 12.569698 6.1730683 12.46875 5.8085938 C 12.367817 5.4441191 12.159319 5.1758831 11.845703 5 z M 15 5 C 14.585215 5 14.20565 5.1404324 13.902344 5.3730469 C 13.905844 5.3848329 13.910744 5.3964011 13.914062 5.4082031 C 14.11324 6.1273329 13.993362 6.9747192 13.626953 7.609375 L 13.361328 8.0683594 C 14.080907 8.4977448 14.59134 9.5874188 14.472656 10.398438 L 14.46875 10.416016 L 13.541016 15.849609 L 12.824219 17.089844 L 12.488281 17.673828 C 13.016583 18.481467 13.928427 19 15 19 C 15.05312 19 15.105887 18.998594 15.158203 18.996094 C 16.780008 18.918218 18 17.646875 18 16 C 18 15 17.500781 14.099609 16.800781 13.599609 L 16.800781 6.8007812 C 16.800781 5.8007812 16 5 15 5 z M 15 6 C 15.4 6 15.800781 6.3007814 15.800781 6.8007812 L 15.800781 8 L 14.300781 8 L 14.300781 6.8007812 L 14.199219 6.8007812 C 14.199219 6.7695312 14.201978 6.7386474 14.205078 6.7089844 C 14.250407 6.2640385 14.625 6 15 6 z M 4.3535156 13.931641 L 3 16.275391 L 9.421875 19.982422 L 10.775391 17.638672 L 4.3535156 13.931641 z ",
  },
  "thermal-perception-hand-alternative": {
    keywords: ["thermal-perception", "hand", "thermometer", "sun"],
    path: "M 9.8457031 5 L 5.3886719 8.6757812 L 4.1972656 13.4375 L 9.4511719 16.470703 L 10.107422 15.332031 L 10.988281 10.181641 C 11.042901 9.8083806 10.91096 9.5316314 10.595703 9.3496094 C 10.412775 9.2439854 10.216532 9.2178034 10.003906 9.2714844 C 9.7912692 9.3251344 9.6207287 9.4505395 9.4960938 9.6484375 L 8.5527344 11.283203 L 8.3535156 12.529297 L 7.6933594 12.404297 L 7.96875 10.945312 L 10.328125 6.859375 C 10.521377 6.5246392 10.569698 6.1730683 10.46875 5.8085938 C 10.367817 5.4441191 10.159319 5.1758831 9.8457031 5 z M 13 5 C 12.585215 5 12.20565 5.1404324 11.902344 5.3730469 C 11.905844 5.3848329 11.910742 5.3964011 11.914062 5.4082031 C 12.11324 6.1273329 11.993362 6.9747192 11.626953 7.609375 L 11.361328 8.0683594 C 12.080907 8.4977448 12.59134 9.5874198 12.472656 10.398438 L 12.46875 10.416016 L 11.541016 15.849609 L 10.824219 17.089844 L 10.488281 17.673828 C 11.016583 18.481467 11.928427 19 13 19 C 13.05312 19 13.105887 18.998594 13.158203 18.996094 C 14.780008 18.918218 16 17.646875 16 16 C 16 15 15.500781 14.099609 14.800781 13.599609 L 14.800781 6.8007812 C 14.800781 5.8007812 14 5 13 5 z M 13 6 C 13.4 6 13.800781 6.3007814 13.800781 6.8007812 L 13.800781 8 L 12.300781 8 L 12.300781 6.8007812 L 12.199219 6.8007812 C 12.199219 6.7695312 12.201978 6.7386474 12.205078 6.7089844 C 12.250407 6.2640385 12.625 6 13 6 z M 18.001953 8 L 16.898438 9.5800781 C 17.240436 9.4553041 17.613737 9.3867187 18.001953 9.3867188 C 18.390168 9.3867188 18.765423 9.4552891 19.107422 9.5800781 L 18.001953 8 z M 20.082031 10.144531 C 20.359327 10.380227 20.604719 10.671157 20.798828 11.003906 C 20.992934 11.341275 21.116951 11.697402 21.181641 12.0625 L 22 10.310547 L 20.082031 10.144531 z M 18.001953 10.310547 C 16.970938 10.310547 16.098309 10.98564 15.800781 11.917969 L 15.800781 13.273438 C 16.1534 13.631047 16.454968 14.043526 16.667969 14.505859 C 17.045134 14.773493 17.50427 14.931641 18.001953 14.931641 C 19.278177 14.931641 20.3125 13.897286 20.3125 12.621094 C 20.3125 11.344901 19.278177 10.310547 18.001953 10.310547 z M 21.177734 13.181641 C 21.113034 13.546741 20.987077 13.900912 20.792969 14.238281 C 20.598863 14.571029 20.354706 14.861961 20.082031 15.097656 L 21.996094 14.931641 L 21.177734 13.181641 z M 2.3535156 13.931641 L 1 16.275391 L 7.421875 19.982422 L 8.7753906 17.638672 L 2.3535156 13.931641 z M 19.097656 15.652344 C 18.755657 15.77712 18.380924 15.857422 18.001953 15.857422 C 17.640809 15.857422 17.300428 15.789052 16.984375 15.683594 C 16.987975 15.723224 16.991841 15.762614 16.994141 15.802734 L 18.001953 17.242188 L 19.097656 15.652344 z ",
  },
};

async function getIcon(name) {
  return { path: TC_ICONS_MAP[name]?.path };
}
async function getIconList() {
  return Object.entries(TC_ICONS_MAP).map(([icon, content]) => ({
    name: icon,
    keywords: content.keywords,
  }));
}

window.customIcons = window.customIcons || {};
window.customIcons["tc"] = { getIcon, getIconList };

window.customIconsets = window.customIconsets || {};
window.customIconsets["tc"] = getIcon;
