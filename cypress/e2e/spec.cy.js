describe('EngageSphere', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.contains('button', 'Accept').click()
  })

  it('shows a customized greeting', () => {
    // Act
    cy.get('[data-testid="name"]').type('Walmyr')
    // Assert
    cy.contains('h2', 'Hi Walmyr!').should('be.visible')
  })

  it('shows the customer details', () => {
    // Act
    cy.contains('button', 'View').click()
    // Assert
    cy.contains('h2', 'Customer Details').should('be.visible');
  })

  it('goes back from the customer details', () => {
    // Arrange
    cy.contains('button', 'View').click()
    // Assert
    cy.contains('h2', 'Customer Details').should('be.visible')
    cy.get('table').should('not.exist')
    // Act
    cy.contains('button', 'Back').click()
    // Assert
    cy.get('table').should('be.visible')
  })

  it('successfully sends a message', function() {
    // Arrange
    cy.get('[aria-label="Open messenger"]').click()
    // Act
    cy.get('#messenger-name').type('Walmyr')
    cy.get('#email').type('walmyr@example.com');
    cy.get('#message').type('Test')
    cy.contains('button', 'Send').click();
    // Assert
    cy.contains('[role="alert"]', 'Your message has been sent.').should('be.visible')
  });
});