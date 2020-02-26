import React, { Component } from 'react';

import Friendly from './friendly';

var people = [
  {
    id: 0,
    name: "Monica",
    gender: "female",
    img: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-1/p240x240/42045073_2155312144480553_265084037184356352_n.jpg?_nc_cat=111&_nc_oc=AQnE8j9wwUaXOsKBkZeMwQ1Vn51vT-F3LvHqE_TyK-i4-r_LjoB0ZpU606qrJLHPDQStnPELPd8xDEJM48T0MJSR&_nc_ht=scontent-ort2-1.xx&_nc_tp=6&oh=5be441401c37ce2ff48352f404e3dc77&oe=5EB52DB1"
  },
  {
    id: 1,
    name: "Estelo",
    gender: "male",
    img: "https://avatars3.githubusercontent.com/u/49965889?s=460&v=4"
  },
  {
    id: 2,
    name: "Jievs",
    gender: "female",
    img: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-1/p240x240/81439133_2519122608325144_4663547997634691072_n.jpg?_nc_cat=107&_nc_oc=AQnA1vRRixMs7dswoS2i1yVoRWlpsm30pPsyY_zqKnnS4IBbOF2wxrCMaNv_iC5kbr7-88nDUuN6xa05QXEONtKR&_nc_ht=scontent-ort2-1.xx&_nc_tp=6&oh=0222e0438e4c541bc51f65a884fd967a&oe=5ECBCBCE"
  },
  {
    id: 3,
    name: "Anibal",
    gender: "male",
    img: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-1/p240x240/85169044_2778991935494133_6757418071389896704_o.jpg?_nc_cat=101&_nc_oc=AQnuDLI8rhyP1G2b5jpHvomRt-q6z94_ptWXFeNfNr8J72-HjCzVeVz0-7ttRkvhyERUwpF3olDmPSIjlAndU2MH&_nc_ht=scontent-ort2-1.xx&_nc_tp=6&oh=2c6a42117807d7ae8b53060c1522a868&oe=5EC0CCED"
  },
  {
    id: 4,
    name: "Alexis",
    gender: "female",
    img: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-1/c0.0.240.240a/p240x240/80103441_3492501567487655_5608100714359291904_o.jpg?_nc_cat=109&_nc_oc=AQmKqI-d60zBepivHERJD-dEJoIgO00aeP_lvN3dzFUQhkEZyV5CaIqrWjWlugIoyU8pi8X1z2dfgKcpOPlewCQ7&_nc_ht=scontent-ort2-1.xx&oh=b89b5899d6048f2519144490818ca77e&oe=5EB4F406"
  },
  {
    id: 5,
    name: "Victor",
    gender: "male",
    img: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-1/p240x240/16508038_1477544088957642_8462998570150718083_n.jpg?_nc_cat=106&_nc_oc=AQlkJ0j1Bhkf2rYGqQJ8qootoMqcLG9G-SSxMGnYF0llkU0PpIR-itAAxM0NlQDMrnf3WGVkLiKp3dNzy1-KNa8O&_nc_ht=scontent-ort2-1.xx&_nc_tp=6&oh=af8fb39d9fd114c4159c343ded0f1087&oe=5EFD1DB2"
  },
  {
    id: 6,
    name: "David",
    gender: "male",
    img: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-1/p240x240/81353502_10221425242449268_1502622543620603904_o.jpg?_nc_cat=106&_nc_oc=AQkE7pprEFkK942WidZGwpoEVqn5Kdrfi5Dj5DpFgyVK9SpLAozjGU4uf0uG1Y3_emidgke8o3gtRgtoFWOVMF2t&_nc_ht=scontent-ort2-1.xx&_nc_tp=6&oh=2e6049bc2468fb063fec12004154132c&oe=5ED12C7A"
  },
  {
    id: 7,
    name: "Jesus",
    gender: "male",
    img: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-1/c40.93.240.240a/p320x320/53028698_809107659434147_8327012508208463872_o.jpg?_nc_cat=103&_nc_oc=AQk1aa7PjknZdfMywzyfbf4SsrvDkHWnz3iA7c_ZnfwbD46JNtrxyd0akh31HMzAbCDeNhixSr0q1nlcda5vP0B9&_nc_ht=scontent-ort2-1.xx&oh=58024a75ab029ce989b5946193d25bbd&oe=5EBDA87F"
  },
  {
    id: 8,
    name: "Charca",
    gender: "female",
    img: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-1/p240x240/78427198_10218709956374306_3250737583860219904_n.jpg?_nc_cat=107&_nc_oc=AQlll2FOTL90dLssM7FgyQr2yoZ2utjnyVUFNj4iuHfjSd2siopqBwLPrxJW2hHS3bczjIKMwVDSeQADYzTEZolv&_nc_ht=scontent-ort2-1.xx&_nc_tp=6&oh=a633c52e4e817793b7448cd2640cfd38&oe=5F020233"
  },
  {
    id: 9,
    name: "Rolando",
    gender: "male",
    img: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-1/p240x240/73221788_2778254822187299_4924890340915150848_n.jpg?_nc_cat=105&_nc_oc=AQmUpcfKp_insH-rdboHynZh8EGM95laDaCXJSS8h4K4zaGhfcC23JoJeUpcrHw87TsT_Tsw0UDt9MKzv5eGgI15&_nc_ht=scontent-ort2-1.xx&_nc_tp=6&oh=d7c1a81ca83b866c30f15e1ae01f1525&oe=5EC03C5C"
  },
  {
    id: 10,
    name: "Irvina",
    gender: "female",
    img: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-1/p240x240/81870339_2216545591973030_4772113234595414016_n.jpg?_nc_cat=108&_nc_oc=AQl4CewTW6duyMk0axGwVmx1OasNtuxcSrGF-nLXaSzlmfGx8a_hFdrokY05I8E6Gz6V-P-TWLeI6ftV3iUMqMwX&_nc_ht=scontent-ort2-1.xx&_nc_tp=6&oh=0efef81c4f3dd0a20f33476bb49e7740&oe=5EBEC27F"
  },
  {
    id: 11,
    name: "Jhay",
    gender: "female",
    img: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-1/p240x240/82426272_4017988744893885_8225859852224692224_n.jpg?_nc_cat=107&_nc_oc=AQmypAVjMrbW_21T4AWuGFIXihj4slwvuwlDjr376lyoL5LEfsMsD7A_b3rAGNfmIMzMWOBvUIt-qxTPrw25LR-o&_nc_ht=scontent-ort2-1.xx&_nc_tp=6&oh=485a1b95c05fd5368efa0f5c96f76822&oe=5ED2528E"
  },
  {
    id: 12,
    name: "Dayen",
    gender: "female",
    img: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-1/p240x240/44222077_10210285431290469_756858050274394112_n.jpg?_nc_cat=105&_nc_oc=AQm8l2q-OYxjwo0Vom-NexC9mp96ygWKPSAkxUcORmdr9COxt5bx1xkKftLojRHy1zC6RhMEdK2tn3OkjAl37YGP&_nc_ht=scontent-ort2-1.xx&_nc_tp=6&oh=5e1bdf47be4cfdd1bd1944abd48b0e56&oe=5F0306DF"
  },
  {
    id: 13,
    name: "Paul",
    gender: "male",
    img: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-1/p240x240/12088129_10156128029495635_8032275106750373288_n.jpg?_nc_cat=106&_nc_oc=AQm3i_RXUSzMT8gLL_NiDNqsgAJv4dRfBy9oEy3rM-huobOQebm5CCjyBdAK2_DzYXuISQJfsWnJxUva2R3mHNXm&_nc_ht=scontent-ort2-1.xx&_nc_tp=6&oh=fa5f53006b1b7b09b4476f9a5923264f&oe=5EF776AB"
  },
]

export default class App extends Component {
  render() {

    return (

      <div className='app'>
        <Friendly
          people={people}
        />
      </div>
    );
  }
}