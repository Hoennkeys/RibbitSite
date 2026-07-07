import React from 'react';
import { render, screen } from '@testing-library/react';
import { FeatureCard } from '../FeatureCard';
import '@testing-library/jest-dom';

// Mock do framer-motion para evitar erros de renderização no ambiente de teste do Jest
jest.mock('framer-motion', () => ({
  motion: {
    div: React.forwardRef(({ children, ...props }: any, ref: any) => (
      <div ref={ref} {...props}>
        {children}
      </div>
    )),
  },
}));

describe('Componente FeatureCard', () => {
  const mockProps = {
    title: 'Sound ID (Identificação Acústica)',
    description: 'Grave 6 segundos do coaxar do anfíbio e identifique a espécie.',
    iconSvg: '<svg data-testid="mock-icon" viewBox="0 0 24 24"></svg>',
    animationDelay: 0.2,
  };

  test('deve renderizar o título e a descrição corretamente', () => {
    render(<FeatureCard {...mockProps} />);

    // Verifica se o título está presente e usa tag H3
    const titleElement = screen.getByText(mockProps.title);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe('H3');

    // Verifica se a descrição está presente e usa tag P
    const descElement = screen.getByText(mockProps.description);
    expect(descElement).toBeInTheDocument();
    expect(descElement.tagName).toBe('P');
  });

  test('deve injetar o ícone SVG inline corretamente no HTML', () => {
    render(<FeatureCard {...mockProps} />);

    // Verifica se o SVG inline com o data-testid mockado está no DOM
    const iconElement = screen.getByTestId('mock-icon');
    expect(iconElement).toBeInTheDocument();
  });
});
