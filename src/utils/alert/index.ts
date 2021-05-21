import Swal from 'sweetalert2';

type swalIconType = 'warning' | 'error' | 'success' | 'info' | 'question';

const customSwal = (icon: swalIconType, title: string, text: string | null) => {
  return Swal.fire({
    icon,
    title,
    text: text || '',
    showConfirmButton: true,
    width: '25rem',
    timer: 5000,
  });
};

export default customSwal;
