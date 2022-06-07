import React from 'react';
import { Box } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';

const ProfilePhoto = () => {
  return (
    <>
      <Box className="energy">
        <Box className="energy_wrapper">
          <Image
            borderRadius="50%"
            marginBottom="20px"
            width="150px"
            src="/images/crop_photo_2x.jpg"
            alt="photo"
          />
          <Box className="energy_items">
            <Box
              as="span"
              style={
                {
                  '--bgc': '#c4227b',
                  '--size': '50px',
                  '--deley': '3s',
                } as React.CSSProperties
              }
            />
            <Box
              as="span"
              style={
                {
                  '--bgc': '#19b85b',
                  '--size': '30px',
                  '--deley': '5s',
                } as React.CSSProperties
              }
            />
            <Box
              as="span"
              style={
                {
                  '--bgc': '#1974be',
                  '--size': '25px',
                  '--deley': '7.5s',
                } as React.CSSProperties
              }
            />
            <Box
              as="span"
              style={
                {
                  '--bgc': '#5225bd',
                  '--size': '40px',
                  '--deley': '8s',
                } as React.CSSProperties
              }
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProfilePhoto;
