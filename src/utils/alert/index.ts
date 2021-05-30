import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

type swalIconType = 'warning' | 'error' | 'success' | 'info' | 'question';

const MySwal = withReactContent(Swal);

const customSwal = (
  icon: swalIconType,
  title: string,
  text: string | null,
  showCancel?: boolean,
) => {
  return MySwal.fire({
    icon,
    title,
    text: text || '',
    showConfirmButton: true,
    showCancelButton: showCancel ? true : false,
    width: '25rem',
  });
};

export default customSwal;
