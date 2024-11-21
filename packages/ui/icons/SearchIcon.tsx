import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const SearchIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox='0 0 20 20'>
      <path
        d='M14.61 14.6412L18.9375 19M16.9375 9C16.9375 13.4183 13.3558 17 8.9375 17C4.51922 17 0.9375 13.4183 0.9375 9C0.9375 4.58172 4.51922 1 8.9375 1C13.3558 1 16.9375 4.58172 16.9375 9Z'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.6'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </SvgIcon>
  );
};
