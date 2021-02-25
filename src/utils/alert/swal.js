import Swal from 'sweetalert2';

const customSwal = (icon, title, text) => {
  return Swal.fire({
    icon,
    title,
    text,
    showConfirmButton: true,
    width: '25rem',
    timer: 5000,
  });
};

export default customSwal;
