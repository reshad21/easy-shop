
const SingleHeroSlider = ({ slider }) => {
    const { bg, title } = slider || {};
    return (
        <>
            <div
                className="image-layer"
                style={{
                    backgroundImage: `url(${bg})`,
                }}
            >
                <div className="absolute top-1/2 -translate-y-1/2 text-center w-full text-white main-slider__details">
                    <h1>{title}</h1>
                </div>
            </div>

        </>
    );
};

export default SingleHeroSlider;