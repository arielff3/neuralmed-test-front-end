import CornerstoneViewport from 'react-cornerstone-viewport'
import Header from 'src/components/Header'
import { Container, Content } from './styles'

export const Home = () => {
  const absolutPath = new URL(window.location.href).origin.split('//')[1]
  const configCorner = {
    tools: [
      {
        name: 'FreehandRoi',
        mode: 'active',
        modeOptions: { mouseButtonMask: 1 },
      },
      {
        name: 'Zoom',
        mode: 'active',
        modeOptions: { mouseButtonMask: 2 },
      },
      { name: 'StackScrollMouseWheel', mode: 'active' },
      { name: 'ZoomTouchPinch', mode: 'active' },
      { name: 'StackScrollMultiTouch', mode: 'active' },
    ],
    imageIds: [
      `dicomweb://${absolutPath}/assets/1-activationmap_edema.dcm`,
      `dicomweb://${absolutPath}/assets/1-activationmap_effusion.dcm`,
      `dicomweb://${absolutPath}/assets/1-activationmap_mass_nodule.dcm`,
      `dicomweb://${absolutPath}/assets/1-activationmap_opacity.dcm`,
      `dicomweb://${absolutPath}/assets/1-activationmap_pneumonia.dcm`,
    ],
    imageIdIndex: 0,
  }

  return (
    <Container>
      <Header />
      <Content>
        <h1>Raio-x Torax</h1>
        <CornerstoneViewport
          tools={configCorner.tools}
          imageIds={configCorner.imageIds}
          imageIdIndex={configCorner.imageIdIndex}
          style={{ minWidth: '100%', height: '512px', flex: '1' }}
        />
      </Content>
    </Container>
  )
}

export default Home
