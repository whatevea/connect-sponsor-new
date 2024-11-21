import React, { useEffect, useState } from 'react';
import ListItem, { ListItemProps } from '@mui/material/ListItem';
import { Box, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from './Link';

export interface SidebarItemType {
  label: string;
  icon: React.ReactNode;
  route: string;
}

interface SidebarItemProps {
  item: SidebarItemType;
  isActive?: boolean;
}

export const SidebarItem = (
  { item, isActive }: SidebarItemProps,
  props: ListItemProps
) => {
  const [hover, setHover] = useState<boolean>(false);

  useEffect(() => {
    if (isActive) {
      setHover(false);
    }
  }, [isActive]);

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '50px',
        px: '11px',
        position: 'relative',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Box
        sx={{
          position: 'absolute',
          left: '0',
          top: '0',
          width: '6px',
          height: '100%',
          bgcolor: hover || isActive ? '#E9901A' : 'transparent',
          zIndex: '11',
          borderRadius: '0 6px 6px   0',
        }}
      />
      <ListItem
        component={Link}
        href={item.route}
        {...(props as ListItemProps)}
        sx={{
          height: '100%',
          padding: '8px',
          color: '#fff',
          borderRadius: '12px',
          backgroundColor: hover || isActive ? '#E9901A' : 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '7px',
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: '34px',
            height: '34px',
            bgcolor: hover || isActive ? '#fff' : 'transparent',
            color: hover || isActive ? '#E9901A' : '#Ffff',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // svg: {
            //   fill: hover || isActive ? '#E9901A' : '#Ffff',
            // },
          }}
        >
          {item.icon}
        </ListItemIcon>
        <ListItemText
          sx={{
            m: 0,
            p: 0,
            span: {
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '20px',
            },
          }}
          primary={item.label}
        />
      </ListItem>
    </Box>
  );
};
