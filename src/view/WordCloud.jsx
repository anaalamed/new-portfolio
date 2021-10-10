import ReactWordcloud from "react-wordcloud";
import styled from "styled-components";

export default function App() {
    const words = [
        {
            text: "",
            value: 1
        },
        {
            text: "HTML",
            value: 110
        },
        {
            text: "CSS",
            value: 100
        },
        {
            text: "Sass",
            value: 80
        },
        {
            text: "JavaScript",
            value: 100
        },
        {
            text: "TypeScript",
            value: 70
        },
        {
            text: "React",
            value: 120
        },
        {
            text: "Redux",
            value: 90
        },
        {
            text: "styled-component",
            value: 60
        },
        {
            text: "NodeJS",
            value: 90
        },
        {
            text: "Express",
            value: 90
        },
        {
            text: "MongoDB",
            value: 90
        },
        {
            text: "Git",
            value: 90
        },
        {
            text: "Heroku",
            value: 80
        },
        {
            text: "Firebase",
            value: 70
        },
        {
            text: "Docker",
            value: 50
        },
        {
            text: "Postman",
            value: 50
        }
    ];

    const callbacks = {
        getWordColor: (word) => (word.value > 50 ? "blue" : "red"),
        onWordClick: console.log,
        onWordMouseOver: console.log,
        getWordTooltip: (word) =>
            `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`
    };
    const options = {
        rotations: 1,
        rotationAngles: [-90, 0]
    };
    const size = [900, 400];

    return (
        <Box>
            <ReactWordcloud
                // callbacks={callbacks}
                // options={options}
                size={size}
                words={words}
            />
        </Box>
    );
}

const Box = styled.div` 
  width: 50rem;
  
`;
