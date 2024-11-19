import { LinkProps, Link as MuiLink } from '@mui/material';

import { Link as ReactRouterLink } from 'react-router-dom';

export const Link = (props: LinkProps) => {
  return (
    <MuiLink {...props} component={ReactRouterLink} to={props.href ?? '#'} />
  );
};
