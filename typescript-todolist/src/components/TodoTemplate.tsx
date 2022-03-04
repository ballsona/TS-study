import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
  width: 512px;
  height: 618px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  margin: 96px auto 32px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export default function TodoTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}
