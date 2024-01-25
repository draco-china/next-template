'use client';

// import { icons } from '@iconify-json/flag';
import { IconProps, Icon as Iconify, addCollection } from '@iconify/react';
import Local from './local.json';

addCollection(Local);

export default function Icon(props: IconProps) {
  return <Iconify {...props} />;
}
