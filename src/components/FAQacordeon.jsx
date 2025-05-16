import { useState } from 'react';
import './FAQacordeon.css';
import image1Acordeon from '../assets/img1Acordeon.png';
import image2Acordeon from '../assets/img2Acordeon.png';
import image3Acordeon from '../assets/img3Acordeon.png';
import image4Acordeon from '../assets/img4Acordeon.png';
import image5Acordeon from '../assets/img5Acordeon.png';
import image6Acordeon from '../assets/img6Acordeon.png';

const CustomAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            icon: image1Acordeon,
            question: "¿Qué es Full Ready?",
            answer: "Es más que una bebida, es tu solución para vivir la vida al máximo. Con ingredientes 100% naturales, Full Ready te ayuda a disfrutar tus noches y aún así despertar listo para conquistar el día. No es solo un producto; es el equilibrio que has estado buscando.",
        },
        {
            icon: image2Acordeon,
            question: "¿Qué contiene Full Ready?",
            answer:
                "Una poderosa mezcla de aloe vera, alcachofa, vitamina C y superfrutas como papaya, plátano y manzana. Sin cafeína, sin taurina, sin ingredientes artificiales—solo componentes limpios y naturales que trabajan juntos para mantenerte sintiéndote genial.",
        },
        {
            icon: image3Acordeon,
            question: "¿Cómo tomo Full Ready?",
            answer: "Paso 1: Tómalo antes de salir—prepara tu hígado y sistema digestivo para la noche. Paso 2: Mantenlo cerca durante la diversión—hidrata, energiza y te mantiene equilibrado. Con Full Ready, no solo sobrevives la noche—la dominas.",
        },
        {
            icon: image4Acordeon,
            question: "¿Por qué elegir Full Ready?",
            answer: "Porque mereces un producto que trabaje tan duro como tú te diviertes. Full Ready está diseñado científicamente para ayudar a tu cuerpo a recuperarse mientras disfrutas. No más sacrificar tus mañanas por tus noches.",
        },
        {
            icon: image5Acordeon,
            question: "¿Tiene efectos secundarios?",
            answer: "Full Ready es seguro y está hecho con ingredientes naturales, pero si tienes alergias o sensibilidades, revisa la etiqueta o consulta a tu médico. Se trata de mantenerte en equilibrio, sin riesgos innecesarios.",
        },
        {
            icon: image6Acordeon,
            question: "¿Es Full Ready adecuado para mí?",
            answer:
                "Ya seas un aventurero, un alma social o alguien que valora el equilibrio, Full Ready es para ti. Es perfecto para cualquiera que quiera disfrutar la vida sin sentir los efectos posteriores.",
        },
    ];

    return (
        <div className="accordion-container">
            {faqData.map((item, index) => {
                const formattedAnswer =
                    item.question === "¿Cómo tomo Full Ready?"
                        ? item.answer
                            .replace("Paso 1:", "<strong>Paso 1:</strong>")
                            .replace("Paso 2:", "<strong>Paso 2:</strong>")
                        : item.answer;

                return (
                    <div key={index} className="accordion-item">
                        {/* Pregunta */}
                        <div
                            className={`accordion-header ${activeIndex === index ? "active" : ""}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="accordion-header-content">
                                {/* Imagen como ícono */}
                                <img
                                    src={item.icon}
                                    alt="Icono"
                                    className="accordion-icon-image"
                                />
                                <span className="accordion-question">{item.question}</span>
                            </div>
                            <i
                                className={`accordion-toggle bi ${activeIndex === index ? "bi-chevron-up active-icon" : "bi-chevron-down inactive-icon"}`}
                            ></i>
                        </div>

                        {/* Respuesta */}
                        <div
                            className="accordion-content"
                            style={{
                                maxHeight: activeIndex === index ? "300px" : "0",
                            }}
                        >
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: formattedAnswer,
                                }}
                            ></p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CustomAccordion;