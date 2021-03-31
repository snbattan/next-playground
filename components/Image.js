import Image from 'next/image';
import PropTypes from 'prop-types';

const ImageWrapper = ({
  alt, className, height, isPriority, src, width,
}) => (
  <Image
    alt={alt}
    className={className}
    height={height}
    priority={isPriority}
    src={src}
    width={width}
  />
);

ImageWrapper.defaultProps = {
  alt: 'Sierra in memoji form',
  className: '',
  height: 144,
  isPriority: false,
  src: '/images/sMemoji.jpg',
  width: 144,
};

ImageWrapper.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
  height: PropTypes.number,
  isPriority: PropTypes.bool,
  src: PropTypes.string,
  width: PropTypes.number,
};

export default ImageWrapper;