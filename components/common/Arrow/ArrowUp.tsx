import { ArrowInterface } from 'types';

const ArrowUp: React.FC<ArrowInterface> = ({ color = 'rgb(28, 203, 33)' }) => {
  return (
    <div
      style={{
        borderColor: `transparent transparent ${color}`,
        borderStyle: 'solid',
        borderWidth: '0px 6px 8px',
        height: '0px',
        marginRight: '5px',
        width: '0px',
        alignSelf: 'center',
      }}
    />
  );
};

export default ArrowUp;
