import brows1 from "../images/brows (1).jpeg";
import brows2 from "../images/brows (2).jpeg";
import brows3 from "../images/brows (3).jpeg";
import brows4 from "../images/brows (4).jpeg";
import brows5 from "../images/brows (5).jpeg";
import brows6 from "../images/brows (6).jpeg";
import brows7 from "../images/brows (7).jpg";
import brows8 from "../images/brows (8).jpg";
import gele1 from "../images/gele (1).jpeg";
import gele2 from "../images/gele (2).jpg";
import gele3 from "../images/gele (3).jpeg";
import gele4 from "../images/gele (4).jpeg";
import gele5 from "../images/gele (5).jpeg";
import gele6 from "../images/gele (6).jpg";
import gele7 from "../images/gele (7).jpeg";
import gele8 from "../images/gele (8).jpg";
import makeup1 from "../images/makeup (1).jpeg";
import makeup2 from "../images/makeup (2).jpeg";
import makeup3 from "../images/makeup (3).jpeg";
import makeup4 from "../images/makeup (4).jpeg";
import makeup5 from "../images/makeup (5).jpeg";
import makeup6 from "../images/makeup (6).jpeg";
import makeup7 from "../images/makeup (7).jpeg";
import makeup8 from "../images/makeup (8).jpg";
import brush from "../images/brush.png";
import face from "../images/face.png";
import salon from "../images/salon.png";

const slideShow = [
    {
        img: brows1
    },
    {
        img: gele1
    },
    {
        img: makeup1
    },
    {
        img: brows3
    },
    {
        img: gele2
    },
    {
        img: makeup2
    },
    {
        img: brows2
    },
    {
        img: gele3
    },
    {
        img: makeup3
    }
]

const works = [
    {
        name: "Brows",
        description: "Best Brows Cravings of Previous satisfied customers",
        img: [
            {image: brows1},
            {image: brows2},
            {image: brows3},
            {image: brows4},
            {image: brows5},
            {image: brows6},
            {image: brows7},
            {image: brows8}
        ],
        illustration: face,
        link: "/work/brows"
    },
    {
        name: "Make Ups",
        description: "Best Make-up and Cosmetics Styles of Previous satisfied customers",
        img: [
            {image: makeup1},
            {image: makeup2},
            {image: makeup3},
            {image: makeup4},
            {image: makeup5},
            {image: makeup6},
            {image: makeup7},
            {image: makeup8}
        ],
        illustration: brush,
        link: "/work/makeup"
    },
    {
        name: "Gele",
        description: "Best Gele Styles of Previous satisfied customers",
        img: [
            {image: gele1},
            {image: gele2},
            {image: gele3},
            {image: gele4},
            {image: gele5},
            {image: gele6},
            {image: gele7},
            {image: gele8}
        ],
        illustration: salon,
        link: "/work/gele"
    }
]

export {slideShow, works};