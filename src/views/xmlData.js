export const xmlStr = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_0z2u7ie" targetNamespace="http://bpmn.io/schema/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="9.0.3">
  <bpmn:process id="Process_07s1323" isExecutable="false">
    <bpmn:exclusiveGateway id="Gateway_0isobvn">
      <bpmn:incoming>Flow_12iec96</bpmn:incoming>
      <bpmn:outgoing>Flow_12ft63y</bpmn:outgoing>
      <bpmn:outgoing>Flow_01s4evn</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:sequenceFlow id="Flow_0sj1nzp" sourceRef="StartEvent_1n0zhp7" targetRef="Activity_1vunjyb" />
    <bpmn:sequenceFlow id="Flow_12ft63y" sourceRef="Gateway_0isobvn" targetRef="Activity_0csobrm" />
    <bpmn:sequenceFlow id="Flow_01s4evn" sourceRef="Gateway_0isobvn" targetRef="Activity_0x4qi1c" />
    <bpmn:sequenceFlow id="Flow_12iec96" sourceRef="Activity_1vunjyb" targetRef="Gateway_0isobvn" />
    <bpmn:task id="Activity_09zyqjk">
      <bpmn:incoming>Flow_068ohgo</bpmn:incoming>
      <bpmn:incoming>Flow_1orhc25</bpmn:incoming>
      <bpmn:outgoing>Flow_1gr3aha</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="Flow_068ohgo" sourceRef="Activity_0csobrm" targetRef="Activity_09zyqjk" />
    <bpmn:sequenceFlow id="Flow_1orhc25" sourceRef="Activity_0x4qi1c" targetRef="Activity_09zyqjk" />
    <bpmn:sequenceFlow id="Flow_1gr3aha" sourceRef="Activity_09zyqjk" targetRef="Event_1i7u4h2" />
    <bpmn:userTask id="Activity_0csobrm">
      <bpmn:incoming>Flow_12ft63y</bpmn:incoming>
      <bpmn:outgoing>Flow_068ohgo</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:userTask id="Activity_0x4qi1c">
      <bpmn:incoming>Flow_01s4evn</bpmn:incoming>
      <bpmn:outgoing>Flow_1orhc25</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:manualTask id="Activity_1vunjyb">
      <bpmn:incoming>Flow_0sj1nzp</bpmn:incoming>
      <bpmn:outgoing>Flow_12iec96</bpmn:outgoing>
    </bpmn:manualTask>
    <bpmn:startEvent id="StartEvent_1n0zhp7">
      <bpmn:outgoing>Flow_0sj1nzp</bpmn:outgoing>
      <bpmn:signalEventDefinition id="SignalEventDefinition_0lvhyxy" />
    </bpmn:startEvent>
    <bpmn:endEvent id="Event_1i7u4h2">
      <bpmn:incoming>Flow_1gr3aha</bpmn:incoming>
      <bpmn:signalEventDefinition id="SignalEventDefinition_1d822up" />
    </bpmn:endEvent>
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_07s1323">
      <bpmndi:BPMNEdge id="Flow_0sj1nzp_di" bpmnElement="Flow_0sj1nzp">
        <di:waypoint x="330" y="128" />
        <di:waypoint x="330" y="180" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_12ft63y_di" bpmnElement="Flow_12ft63y">
        <di:waypoint x="305" y="360" />
        <di:waypoint x="210" y="360" />
        <di:waypoint x="210" y="420" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_01s4evn_di" bpmnElement="Flow_01s4evn">
        <di:waypoint x="355" y="360" />
        <di:waypoint x="460" y="360" />
        <di:waypoint x="460" y="420" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_12iec96_di" bpmnElement="Flow_12iec96">
        <di:waypoint x="330" y="260" />
        <di:waypoint x="330" y="335" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_068ohgo_di" bpmnElement="Flow_068ohgo">
        <di:waypoint x="210" y="500" />
        <di:waypoint x="210" y="630" />
        <di:waypoint x="280" y="630" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1orhc25_di" bpmnElement="Flow_1orhc25">
        <di:waypoint x="460" y="500" />
        <di:waypoint x="460" y="630" />
        <di:waypoint x="380" y="630" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1gr3aha_di" bpmnElement="Flow_1gr3aha">
        <di:waypoint x="330" y="670" />
        <di:waypoint x="330" y="842" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Gateway_0isobvn_di" bpmnElement="Gateway_0isobvn" isMarkerVisible="true">
        <dc:Bounds x="305" y="335" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0bh1c8b_di" bpmnElement="Activity_0csobrm">
        <dc:Bounds x="160" y="420" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1hsb0e7_di" bpmnElement="Activity_0x4qi1c">
        <dc:Bounds x="410" y="420" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0d7tsud_di" bpmnElement="Activity_1vunjyb">
        <dc:Bounds x="280" y="180" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_09zyqjk_di" bpmnElement="Activity_09zyqjk">
        <dc:Bounds x="280" y="590" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0giwqy2_di" bpmnElement="StartEvent_1n0zhp7">
        <dc:Bounds x="312" y="92" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0n5pbzh_di" bpmnElement="Event_1i7u4h2">
        <dc:Bounds x="312" y="842" width="36" height="36" />
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>
`