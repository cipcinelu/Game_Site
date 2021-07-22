import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("статус из проспса должен быть в стейте", () => {
    const component = create(<ProfileStatus status ='Оно живое!' />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("Оно живое!");
  });
  test("span отображается", () => {
    const component = create(<ProfileStatus status ='Оно живое!' />);
    const root = component.root;
    let span = root.findByType('span')
    expect(span).not.toBeNull;
  });
  test("input не отображается", () => {
    const component = create(<ProfileStatus status ='Оно живое!' />);
    const root = component.root;
    expect(() => {root.findByType('input')}).toThrow;
  });
  test("В спане правильный статус", () => {
    const component = create(<ProfileStatus status ='Оно живое!' />);
    const root = component.root;
    let span = root.findByType('span')
    expect(span.children[0]).toBe('Оно живое!');
  });
  test("Инпут отображаетсяв режиме редактирования", () => {
    const component = create(<ProfileStatus status ='Оно живое!' />);
    const root = component.root;
    let span = root.findByType('span')
    span.props.onClick();
    let input = root.findByType('input')
    expect(input.props.value).toBe('Оно живое!');
  });
  test("Коллбек сработал", () => {
    const mockCollback = jest.fn();
    const component = create(<ProfileStatus status ='Оно живое!' updateStatus={mockCollback}/>);
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCollback.mock.calls.length).toBe(1);
  });
});