import Zoom from 'react-medium-image-zoom';
import './ZoomableImage.css';

const ZoomableImage = ({ ...attributes }) => {
  return (
    <Zoom>
      <img className="xl:h-[40vh] md:h-52 lg:h-72 h-64" {...attributes} />
    </Zoom>
  );
};

export default ZoomableImage;
