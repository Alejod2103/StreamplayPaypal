import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroSubText, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const Hero = () => {
	return (
		<HeroSection>
			<HeroVideo src="./assets/footer-bg.jpg" autoPlay muted />
			<Container>
				<MainHeading>StreamPlay TV</MainHeading>
				<HeroText>
				 <HeroSubText className='subtitulo'>Obtén el mejor servicio de TV paga a nivel nacional, con mas +450 canales entre todos nuestros paquetes, contamos con la mejor programación en cuanto a Deportes, infantiles, series, películas y Tv shows. Lo mejor de todo es que contamos con full alta definición 4k en todos nuestros servicios, sin costos escondidos, Sin duda los mejores beneficios a un excelente precio.</HeroSubText>
				</HeroText>
				<ButtonWrapper>
					<Link to="pricing">
						<Button>Ver Paquetes</Button>
					</Link>
					<HeroButton>Ver Contenido</HeroButton>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;