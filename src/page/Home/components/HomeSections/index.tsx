import React from 'react';
import { Link } from 'react-router-dom';

import ImageOne from '../../../../assets/Home/car1.png';
import ImageTwo from '../../../../assets/Home/car2.png';
import ImageThree from '../../../../assets/Home/notACar.png';

import {
  ContentSection, ContentSectionWrapper, ContentSectionTitle, ContentSectionSubTitle,
  ContentSectionFooter, ContentSectionImg,
} from './styles';

const data = [
  {
    id: 1,
    title: 'Veículos reservados e vendidos',
    subtitle: 'Veículos reservados e vendidos por você',
    footer: '147 Veículos',
    image: ImageOne,
    alt: 'image-one',
    link: '/cars/unavailable',
  },
  {
    id: 2,
    title: 'Listagem geral de veículos',
    subtitle: 'Listagem de veículos de toda a empresa',
    footer: '180 Veículos',
    image: ImageTwo,
    alt: 'image-two',
    link: '/cars/all',

  },
  {
    id: 3,
    title: 'Funcionários da empresa',
    subtitle: 'Listagem de todos os funcionários da empresa',
    footer: '147 funcionários',
    image: ImageThree,
    alt: 'image-two',
    link: '/employees',

  },
];

interface IElement {
  title: string,
  subtitle: string,
  footer: string,
  image: string,
  alt: string,
  id: number,
  link: string
}

const renderSection = (array:any): JSX.Element => array.map((
  el:IElement,
) => {
  console.log('ek', el);
  return (
    <Link to={el.link} key={el.id}>
      <ContentSection>
        <ContentSectionWrapper>
          <ContentSectionTitle>
            {el.title}
          </ContentSectionTitle>
          <ContentSectionSubTitle>
            {el.subtitle}
          </ContentSectionSubTitle>
          <ContentSectionFooter>{el.footer}</ContentSectionFooter>
        </ContentSectionWrapper>
        <ContentSectionImg src={el.image} alt={el.alt} />
      </ContentSection>
    </Link>

  );
});

const HomeSections: React.FC = () => (
  renderSection(data)
);

export default HomeSections;
