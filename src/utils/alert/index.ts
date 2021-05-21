import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

type swalIconType = 'warning' | 'error' | 'success' | 'info' | 'question';

const MySwal = withReactContent(Swal);

const customSwal = (icon: swalIconType, title: string, text: string | null) => {
  return MySwal.fire({
    icon,
    title,
    text: text || '',
    showConfirmButton: true,
    width: '25rem',
    timer: 5000,
  });
};

export default customSwal;
