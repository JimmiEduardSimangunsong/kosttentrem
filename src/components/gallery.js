import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import security from "../asset/images/gallery/security.png";
import taman from "../asset/images/gallery/taman.png";
import depan from "../asset/images/gallery/Depan.png";
import tim from "../asset/images/gallery/tim.png";
import kamar1 from "../asset/images/gallery/kamar1.png";
import kamar2 from "../asset/images/gallery/kamar2.png";
import lobby from "../asset/images/gallery/lobby.png";
import parkirmobil from "../asset/images/gallery/parkirmobil.png";
import parkirmotor from "../asset/images/gallery/parkirmotor.png";
import halaman from "../asset/images/gallery/halaman.png";
import tempatsantai from "../asset/images/gallery/tempatsantai.png";
import lantai2 from "../asset/images/gallery/lantai2.png";
import kamartampakdepan from "../asset/images/gallery/kamartampakdepan.png";
import parkirspeda from "../asset/images/gallery/parkirspeda.png";
import fasilitaskamar from "../asset/images/gallery/fasilitaskamar.png";

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function CustomImageList() {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Menggunakan tinggi layar sebagai referensi
      }}>
    <ImageList
      sx={{
        width: '80%',
        height: '86%',
        margin: '0 auto',
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        transform: 'translateZ(0)',
      }}
      rowHeight={200}
      gap={1}
    >
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img
              {...srcset(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label={`star ${item.title}`}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: depan,
    title: 'Tampak Depan',
    author: '@kosttentrem',
    featured: true,
  },
  {
    img: taman,
    title: 'Taman',
    author: 'kosttentrem',
  },
  {
    img: security,
    title: 'Security',
    author: '@kosttentrem',
  },
  {
    img: tim,
    title: 'Team Kost Tentrem',
    author: '@kosttentrem',
  },
  {
    img: kamar1,
    title: 'Kamar',
    author: '@KOSTTENTREM',
  },
  {
    img:    kamar2,
    title: 'Kamar AC',
    author: '@kosttentrem',
    featured: true,
  },
  {
    img:    lobby,
    title: 'Lobby',
    author: '@kosttentrem',
  },
  {
    img:   parkirmobil,
    title: 'Parkir Mobil',
    author: '@katie_wasserman',
  },
  {
    img:    parkirmotor,
    title: 'Parkir Motor',
    author: '@silverdalex',
  },
  {
    img:    halaman,
    title: 'Halman',
    author: '@shelleypauls',
  },
  {
    img:    tempatsantai,
    title: 'Tempat Santai',
    author: '@peterlaster',
  },
  {
    img:    lantai2,
    title: 'Dari Lantai 2',
    author: '@southside_customs',
  },
  {
    img:    kamartampakdepan,
    title: 'Kamar Tampak Depan',
    author: '@southside_customs',
  },
  {
    img:    fasilitaskamar,
    title: 'Fasilitas Kamar',
    author: '@southside_customs',
  },
  {
    img:    parkirspeda,
    title: 'Parkir Sepeda',
    author: '@southside_customs',
  },
];
