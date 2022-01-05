import React from 'react';

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
  },
  {
    id: 2,
    title: 'Listagem geral de veículos',
    subtitle: 'Listagem de veículos de toda a empresa',
    footer: '180 Veículos',
    image: ImageTwo,
    alt: 'image-two',
  },
  {
    id: 3,
    title: 'Funcionários da empresa',
    subtitle: 'Listagem de todos os funcionários da empresa',
    footer: '147 funcionários',
    image: ImageThree,
    alt: 'image-two',
  },
];

interface IElement {
  title: string,
  subtitle: string,
  footer: string,
  image: string,
  alt: string,
  id: number,
}

const renderSection = (array:any): JSX.Element => array.map((
  el:IElement,
) => (
  <ContentSection key={el.id}>
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
));

const HomeSections: React.FC = () => (
  renderSection(data)
);

export default HomeSections;
