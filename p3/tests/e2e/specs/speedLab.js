// https://docs.cypress.io/api/introduction/api.html

describe("SpeedLab", () => {
  it("Visits the homepage", () => {
    cy.visit("/");
    cy.contains(
      "p",
      "SpeedLab is your expedite and smart way to add, save and present your lab experimental data"
    );
  });
  it("Visits Experiments page and test", () => {
    cy.visit("/experiments");
    cy.contains("h2", "All Experiments");
    cy.contains("[data-test='unit-test-showexp']", "eOX101");
    cy.contains("[data-test='unit-test-showexp']", "eEE101");
  });
  it("Visits feature experiments page and test", () => {
    cy.visit("/featuredExperiments");
    cy.contains("h2", "Featured Experiments");
    cy.get("[data-test='chart-search']").type("eOX101");
    cy.get("[data-test='chart-search-btn']").click();
  });
  it("Visits add Experiments data page and test validation", () => {
    cy.visit("/addExpData");
    cy.contains("h2", "Add New Experiment Data");
    cy.get("[data-test='new-exp-validation']").click();
    cy.contains("[data-test='show-error-msg']", "Please check the form again");
  });
  it("Add new experiment data to All experiment", () => {
    cy.visit("/addExpData");
    cy.get("[data-test='new-data-test1']").type("eOXtest", { force: true });
    cy.get("[data-test='new-data-test2']").type("101", { force: true });
    cy.get("[data-test='new-exp-validation']").click();
    // cy.visit("/experiments");
    // cy.contains("[data-test='unit-test-showexp']", "eOXtest");
  });
});
