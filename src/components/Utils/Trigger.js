import styled from "styled-components";

import { Icon } from "antd";

const Trigger = styled(Icon)`
  font-size: 18px;
  line-height: 48px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #1890ff;
  }
`;

export default Trigger;
