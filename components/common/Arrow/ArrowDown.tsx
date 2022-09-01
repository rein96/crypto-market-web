import { ArrowInterface } from 'types';

const ArrowDown: React.FC<ArrowInterface> = ({
  color = 'rgb(255, 90, 90)',
}) => {
  return (
    <div
      style={{
        borderColor: `${color} transparent transparent`,
        borderStyle: 'solid',
        borderWidth: '8px 6px 0px',
        height: '0px',
        marginRight: '5px',
        width: '0px',
        alignSelf: 'center',
      }}
    />
  );
};

export default ArrowDown;
