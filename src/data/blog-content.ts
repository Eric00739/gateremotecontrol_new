import { illustratedBlogPhotos } from './generated-visuals';

import type { BlogPostContentBlock } from './blog';
import { blogPosts } from './blog';
import type { BlogPostMeta } from './blog';

export type BlogPost = BlogPostMeta & {
  content: BlogPostContentBlock[];
};

/** Full article bodies, keyed by slug. Split from blog.ts so client list pages
 * ship only metadata instead of every article's full text. */
export const blogContentBySlug: Record<string, BlogPostContentBlock[]> = {
  'rf-remote-pairing-field-checklist': [
    {
      type: 'paragraph',
      text: 'A remote does nothing. You press the button again, repeat the learning sequence and eventually try a replacement. The replacement does nothing either. Before ordering another unit, work through the installation in a consistent order.',
    },
    {
      type: 'paragraph',
      text: 'This checklist is for installers, after-sales teams and buyers checking a replacement RF remote. It starts with simple checks and moves toward compatibility, enrollment and receiver diagnostics. The aim is to narrow down the fault rather than guess which part to replace.',
    },
    {
      type: 'quote',
      text: 'No movement is a symptom. It does not tell you whether pairing failed, the radio message was missed or the controller declined to act.',
    },
    {
      type: 'image',
      src: '/images/blog/rf-remote-pairing-field-checklist/pairing-workbench.webp',
      srcSet: '/images/blog/rf-remote-pairing-field-checklist/pairing-workbench-320.webp 320w, /images/blog/rf-remote-pairing-field-checklist/pairing-workbench-640.webp 640w, /images/blog/rf-remote-pairing-field-checklist/pairing-workbench.webp 1280w',
      alt: 'Illustration: A generic RF remote, disconnected receiver controller, spare coin cell and meter on a gray workbench',
      caption: 'A conceptual bench setup. These are generic illustrations, not tested products or a company installation.',
    },
    {
      type: 'heading',
      id: 'identify-the-failed-step',
      text: 'Identify the Failed Step',
    },
    {
      type: 'paragraph',
      text: 'Start by separating enrollment from normal operation. Did the receiver confirm that it saved the remote, or are you assuming failure because the door did not move? A receiver may accept a command while the downstream controller is stopped by an input, interlock or output fault.',
    },
    {
      type: 'paragraph',
      text: 'Record the remote model, receiver model, intended button action and exact indicator sequence. If an existing remote still operates the equipment, keep it as a reference. Change one thing at a time so the next result tells you something useful.',
    },
    {
      type: 'heading',
      id: 'check-battery-and-contacts',
      text: 'Check the Battery and Its Contacts',
    },
    {
      type: 'paragraph',
      text: 'Intermittent operation, a sudden loss of range or a dim indicator are good reasons to check the battery first. Fit a fresh battery of the specified type and polarity. Inspect the holder for loose contacts, corrosion or a contact that no longer presses firmly against the cell.',
    },
    {
      type: 'paragraph',
      text: 'A battery can show voltage at rest and still sag during a transmission pulse. A lit indicator does not establish that the supply stays within the radio circuit’s operating limits. If you measure voltage, compare the voltage during a button press with the limits for that remote; an unloaded reading alone is incomplete.',
    },
    {
      type: 'paragraph',
      text: 'For the difference between remaining charge and voltage under load, see our CR2032 battery guide. Use the battery specified for your model; RF remotes do not all use a CR2032.',
      links: [{ text: 'CR2032 battery guide', href: '/blog/cr2032-rf-remote-battery-life' }],
    },
    {
      type: 'image',
      src: '/images/blog/rf-remote-pairing-field-checklist/battery-contact-check.webp',
      srcSet: '/images/blog/rf-remote-pairing-field-checklist/battery-contact-check-320.webp 320w, /images/blog/rf-remote-pairing-field-checklist/battery-contact-check-640.webp 640w, /images/blog/rf-remote-pairing-field-checklist/battery-contact-check.webp 1280w',
      alt: 'Illustration: An open generic keyfob with its battery holder and a separate coin cell on a gray workbench',
      caption: 'Check the specified battery, polarity and contact condition before changing other parts.',
    },
    {
      type: 'heading',
      id: 'confirm-radio-and-code-compatibility',
      text: 'Confirm Frequency and Coding Compatibility',
    },
    {
      type: 'paragraph',
      text: '315 MHz and 433 MHz are familiar labels on RF remotes, but two identical housings can contain different radios. Check the exact operating frequency of both the remote and receiver against their labels, manuals or manufacturer’s model records. A housing or button count is not a reliable identifier.',
    },
    {
      type: 'paragraph',
      text: 'Do not assume that every crystal or resonator is marked with the transmit frequency. Some radios synthesize the carrier from a lower-frequency reference. TI’s CC1101 data sheet, for example, describes a crystal reference and a programmable RF synthesizer. Board markings can be useful clues, but they need to be interpreted for that design.',
      links: [{ text: 'TI’s CC1101 data sheet', href: 'https://www.ti.com/lit/ds/symlink/cc1101.pdf' }],
    },
    {
      type: 'paragraph',
      text: 'Matching frequency is only one requirement. Modulation, coding protocol, button mapping and any rolling-code provisioning must also match. Learning describes how a receiver stores a transmitter; it does not by itself identify a separate security level or guarantee compatibility.',
    },
    {
      type: 'paragraph',
      text: 'Microchip’s HCS301 documentation illustrates the extra state involved in one rolling-code system: transmitter identity, a key and synchronization information. A matching chip family or carrier frequency alone does not prove that a replacement has the correct configuration. See the replacement pairing guide for a fuller compatibility check.',
      links: [
        { text: 'Microchip’s HCS301 documentation', href: 'https://ww1.microchip.com/downloads/en/devicedoc/21143c.pdf' },
        { text: 'replacement pairing guide', href: '/blog/third-party-rf-remote-brand-receiver-pairing' },
      ],
    },
    {
      type: 'heading',
      id: 'follow-the-model-specific-procedure',
      text: 'Follow the Procedure for That Model',
    },
    {
      type: 'paragraph',
      text: 'There is no universal pairing sequence. Some receivers have a learning button; others use a controller menu or a procedure involving an already authorized remote. Fixed-address systems may require matching settings rather than learning. Copying a signal into a remote is also different from enrolling it in the receiver.',
    },
    {
      type: 'list',
      items: [
        'Use the instructions for the exact receiver and remote combination, including any required enrollment permission.',
        'Confirm the receiver’s documented learning-state indication before pressing the new remote.',
        'Use the specified button, hold time and learning window. A long press can select another function, including memory deletion.',
        'Use the documented distance and antenna arrangement. Start at a short practical distance without pressing the remote against the receiver antenna.',
        'Look for the model’s actual success indication, then test the intended button action in normal operation.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Avoid treating a flash or beep as a universal success signal. Nice’s SMXI/SMXIS instructions show distinct memorization modes and LED sequences. Those sequences are examples for the named receivers, not instructions for an unrelated product.',
      links: [{ text: 'Nice’s SMXI/SMXIS instructions', href: 'https://www.niceforyou.com/sites/default/files/upload/manuals/IS0136A00MM.pdf' }],
    },
    {
      type: 'heading',
      id: 'compare-site-and-bench-conditions',
      text: 'Compare Site and Bench Conditions',
    },
    {
      type: 'paragraph',
      text: 'If the same pair works on the bench but fails after installation, compare antenna placement, metalwork, receiver supply and nearby equipment. Motor drives and switching supplies can introduce electrical noise; other transmitters using the same radio channel can interfere with reception. The actual effect depends on the equipment and installation.',
    },
    {
      type: 'paragraph',
      text: 'Wi-Fi and Bluetooth normally operate in bands different from a 315 or 433 MHz remote. Their presence alone does not establish direct same-channel interference. Check the radio environment and possible supply or installation effects rather than blame every nearby wireless device.',
    },
    {
      type: 'paragraph',
      text: 'Repeat the test with the same remote, receiver, battery and procedure, changing one condition at a time. Compare nearby equipment running and stopped where practical, and try the antenna placement permitted by the receiver instructions. Keep a note of what changed and whether the result repeats.',
    },
    {
      type: 'callout',
      title: 'A different location is a clue, not a diagnosis',
      text: 'Moving the equipment changes distance, orientation, obstructions and sometimes the power supply as well as interference. If operation improves, isolate those changes before deciding what caused the failure.',
    },
    {
      type: 'heading',
      id: 'separate-transmitter-receiver-and-output',
      text: 'Separate the Remote, Receiver and Output',
    },
    {
      type: 'paragraph',
      text: 'A flashing remote LED shows that its indicator circuit responded. It does not prove correct frequency, RF output, data timing or protocol. Likewise, a receiver entering learning mode shows that part of its control logic responded; it does not prove that its radio front end can recover the message.',
    },
    {
      type: 'list',
      items: [
        'Compare an already enrolled, known-working remote on the same receiver. If it works, focus first on the new remote’s compatibility and enrollment.',
        'Where available, test the suspect remote with a known-compatible receiver using its documented procedure. Two unverified units are a poor reference pair.',
        'If the receiver cannot enter learning mode, check its documented supply requirements, programming restrictions and fault indications.',
        'If enrollment is confirmed but the equipment does not move, check button assignment, receiver output and the downstream controller’s status.',
      ],
    },
    {
      type: 'paragraph',
      text: 'A frequency checker can indicate the presence of a signal within its capabilities, but that alone does not validate the encoded message. Where measurements are needed, record what the instrument actually established rather than label the whole remote “good.” Leave the controller’s required interlocks in operation during checks.',
    },
    {
      type: 'heading',
      id: 'check-memory-before-clearing',
      text: 'Check Capacity Before Clearing Memory',
    },
    {
      type: 'paragraph',
      text: 'A full receiver memory can prevent a new enrollment, but a failed attempt does not prove the memory is full. Check the model’s capacity, how entries are counted and any full-memory indication. An entry may represent a whole transmitter or one button assignment.',
    },
    {
      type: 'paragraph',
      text: 'Use individual deletion if the receiver supports it and the entry can be identified. Clear the whole memory only when the documented procedure calls for it and you have the information and access needed to enroll every remote that must keep working. A full reset may also change settings beyond the transmitter list.',
    },
    {
      type: 'callout',
      title: 'Make clearing a planned step',
      text: 'Record the current remotes and button assignments before erasing anything. Confirm the deletion method with the system administrator or manufacturer, then check each required remote after enrollment. Repeated blind resets can make a manageable pairing problem harder to recover.',
    },
    {
      type: 'heading',
      id: 'three-checks-to-remember',
      text: 'Three Checks Worth Remembering',
    },
    {
      type: 'list',
      items: [
        'A battery showing voltage at rest may still fail under transmission load.',
        'Matching frequency does not establish matching protocol or enrollment configuration.',
        'A remote LED or a receiver learning LED does not prove that the full control chain works.',
      ],
    },
    {
      type: 'heading',
      id: 'send-a-useful-support-record',
      text: 'Send a Useful Support Record',
    },
    {
      type: 'paragraph',
      text: 'The practical lesson is to investigate in order: battery and contacts, radio compatibility, the exact learning sequence, installation conditions, receiver response and memory management. Hardware faults remain possible. The checklist helps produce evidence for the next decision rather than assign blame to the product or installer.',
    },
    {
      type: 'paragraph',
      text: 'For a replacement-remote or receiver inquiry with Dongguan Fengxian Electronics Technology Co., Ltd., send the remote and receiver model numbers, their documented frequency, the button action you need and the steps already tried. Include the indicator sequence and whether an existing remote still works. Photos of labels and accessible boards can help identify the configuration.',
    },
    {
      type: 'paragraph',
      text: 'Use the RF question form below to open an email draft. Review the message, attach your photos in your email app and send it. A clear test record makes the next compatibility or troubleshooting check more useful.',
    },
  ],
  'one-to-many-many-to-one-rf-remote-control': [
    {
      type: 'paragraph',
      text: 'At a parking entrance, several guards can carry different remotes and still raise the same barrier. In a workshop, the arrangement may be reversed: one supervisor carries a single remote that sends an opening command to ten roller doors.',
    },
    {
      type: 'paragraph',
      text: 'These are two common RF control arrangements. Many-to-one means several transmitters control one receiver. One-to-many means one transmitter controls several receivers. Understanding the difference makes it easier to plan shared access, group commands and receiver capacity.',
    },
    {
      type: 'quote',
      text: 'The receiver recognizes the message and its enrolled identity. It does not know who is holding the remote.',
    },
    {
      type: 'image',
      src: '/images/blog/one-to-many-many-to-one-rf-remote-control/one-remote-many-receivers.webp',
      srcSet: '/images/blog/one-to-many-many-to-one-rf-remote-control/one-remote-many-receivers-320.webp 320w, /images/blog/one-to-many-many-to-one-rf-remote-control/one-remote-many-receivers-640.webp 640w, /images/blog/one-to-many-many-to-one-rf-remote-control/one-remote-many-receivers.webp 1280w',
      alt: 'Illustration: One generic four-button RF remote and three disconnected receiver controllers on a gray workbench',
      caption: 'Each receiver must recognize the transmitter and map its command to the intended action.',
    },
    {
      type: 'heading',
      id: 'what-receivers-recognize',
      text: 'What the Receiver Actually Recognizes',
    },
    {
      type: 'paragraph',
      text: 'A button press sends more than an instruction to open or close. In many RF remote systems, the message includes transmitter identity or address information and button data. The receiver must first recover a compatible message, check whether it is accepted, then map the button to an output or controller function.',
    },
    {
      type: 'paragraph',
      text: 'Saving a transmitter in a learning receiver is usually called pairing, learning or enrollment. Think of it as adding a badge to an access list. Some fixed-code systems instead use matching address settings on both sides; they do not all have a learning procedure.',
    },
    {
      type: 'list',
      items: [
        'Fixed code: the identity and command pattern remain static for the same button. Matching settings are straightforward, but a system without replay protection can accept a captured command again.',
        'Learning code: a receiver stores a transmitter identity during enrollment. Many inexpensive learning-code remotes still transmit static codes. Learning describes how the receiver is configured; it does not establish encryption or replay protection.',
        'Rolling code: changing code data is checked against stored security and synchronization state. This requires a compatible decoder and enrollment process. The chip name alone does not establish the security of the complete installation.',
      ],
    },
    {
      type: 'paragraph',
      text: 'For example, the Microchip HCS301 data sheet describes enrollment of a transmitter identity, key and synchronization state. This shows why a rolling-code receiver needs more than a list of static addresses. For property access, choose a documented security mechanism and a workable enrollment and revocation process.',
      links: [{ text: 'Microchip HCS301 data sheet', href: 'https://ww1.microchip.com/downloads/en/devicedoc/21143c.pdf' }],
    },
    {
      type: 'heading',
      id: 'one-remote-many-receivers',
      text: 'How One Remote Controls Several Receivers',
    },
    {
      type: 'paragraph',
      text: 'The direct approach is to enroll the same remote in each compatible receiver. Consider ten roller-door controllers. Following the model-specific learning procedure on each controller can make all ten accept the same opening button. This is a design example, not a claim about a completed installation.',
    },
    {
      type: 'paragraph',
      text: 'Every receiver needs compatible frequency, modulation, coding protocol and command interpretation. Rolling-code systems also need compatible security provisioning. Each receiver maintains its own synchronization state, so missed transmissions and subsequent resynchronization need to be checked at every device.',
    },
    {
      type: 'quote',
      text: 'One-to-many works because several receivers accept the same transmitter. It does not require a more powerful remote.',
    },
    {
      type: 'paragraph',
      text: 'Group control adds a command map. In a suitably configured four-button system, A could open Zone 1, B could open Zone 2, C could open all zones and D could close all zones. The receivers or control logic must support these assignments. Four buttons alone do not provide four independently programmable groups.',
    },
    {
      type: 'paragraph',
      text: 'Confirm whether learning stores an entire transmitter or a particular button and channel. Also distinguish explicit open and close commands from a toggle command: if two doors start in different states, the same toggle can produce different results. These details matter in grouped lighting, greenhouse curtain control and roller-door installations.',
    },
    {
      type: 'callout',
      title: 'A shared command is not synchronized motion',
      text: 'Receivers can miss a broadcast independently, and actuators can start or move at different speeds. A one-way command does not confirm that every device moved. If the application needs coordinated motion or verified completion, specify feedback and suitable control logic; retain each machine\'s required local interlocks.',
    },
    {
      type: 'heading',
      id: 'many-remotes-one-receiver',
      text: 'How Several Remotes Share One Receiver',
    },
    {
      type: 'paragraph',
      text: 'Company entrances, parking barriers and garage doors commonly use many-to-one control. Each authorized remote is enrolled in the same receiver. The receiver checks the identity of whichever transmitter sends a valid command.',
    },
    {
      type: 'image',
      src: '/images/blog/one-to-many-many-to-one-rf-remote-control/many-remotes-one-receiver.webp',
      srcSet: '/images/blog/one-to-many-many-to-one-rf-remote-control/many-remotes-one-receiver-320.webp 320w, /images/blog/one-to-many-many-to-one-rf-remote-control/many-remotes-one-receiver-640.webp 640w, /images/blog/one-to-many-many-to-one-rf-remote-control/many-remotes-one-receiver.webp 1280w',
      alt: 'Illustration: Three different generic RF remotes beside one disconnected receiver controller on a gray workbench',
      caption: 'Enrollment capacity and individual deletion are separate requirements to confirm.',
    },
    {
      type: 'paragraph',
      text: 'Memory capacity varies by receiver. A specification might list 20, 32, 64 or more entries, but first establish what an entry represents: one transmitter, one button, or one channel assignment. These numbers are examples, not specifications for a WindChord Remote product.',
    },
    {
      type: 'paragraph',
      text: 'For thirty staff members, allow capacity for their actual enrollment requirements, spare remotes and future additions. Ask what happens when memory is full and whether existing entries can be overwritten. A receiver that can store many remotes still cannot necessarily receive many overlapping transmissions.',
    },
    {
      type: 'list',
      items: [
        'Capacity: verify how entries are counted and leave room for spares and growth.',
        'Compatibility: match frequency, modulation, protocol and security configuration. Similar housings prove none of these.',
        'Deletion: confirm whether one lost remote can be removed, how its entry is identified, and whether deletion survives a power cycle.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Some receivers only support clearing the whole memory, which means enrolling the remaining remotes again. If several remotes share a cloned static identity, the receiver may be unable to revoke just one of them. Distinct identities and a documented deletion procedure make shared access easier to manage.',
    },
    {
      type: 'paragraph',
      text: 'For a rolling-code replacement, confirm the original system model, enrollment rights, key compatibility and pairing procedure before ordering. Sharing a carrier frequency or an encoder family does not guarantee that a new remote can join the system.',
    },
    {
      type: 'heading',
      id: 'wrong-device-or-missed-command',
      text: 'Separate Wrong-Device Actions from Missed Commands',
    },
    {
      type: 'paragraph',
      text: 'If a Zone A remote also operates Zone B, inspect the learned identities, address settings and button assignments first. Both receivers may intentionally or accidentally accept the same command. Using the same protocol does not by itself cause this: the relevant identity and command must also be accepted.',
    },
    {
      type: 'paragraph',
      text: 'Record the receiver, location, enrolled remotes and intended button actions. Check that unrelated zones do not share credentials or group assignments, then verify the observed outputs against that record.',
    },
    {
      type: 'paragraph',
      text: 'Missed commands need a different investigation. Weak signals, receiver overload and overlapping transmissions can prevent decoding. Our guide Different Codes, Same Channel explains why distinct transmitter identities do not prevent radio collisions.',
      links: [{ text: 'Different Codes, Same Channel', href: '/en/blog/different-codes-rf-remote-collisions' }],
    },
    {
      type: 'paragraph',
      text: 'Receiver selectivity and blocking performance matter in a busy RF environment. A superheterodyne architecture may help achieve the required performance, but the label is not a guarantee, and no RF front end fixes a duplicated accepted identity. TI\'s receiver interference guidance explains how unwanted signals can affect sensitivity; evaluate the actual receiver under the site\'s conditions.',
      links: [{ text: 'TI\'s receiver interference guidance', href: 'https://www.ti.com/document-viewer/lit/html/SSZTBX1/GUID-D876250A-BF77-43FA-B25F-1444A512F467' }],
    },
    {
      type: 'heading',
      id: 'check-range-at-every-device',
      text: 'Check Range at Every Device',
    },
    {
      type: 'paragraph',
      text: 'A stated range of 100 metres needs test conditions to be meaningful. Clear line of sight and low interference can differ substantially from a workshop with steelwork, walls, metal cabinets and running equipment. A remote in a pocket or an antenna mounted close to metal can change the result again.',
    },
    {
      type: 'paragraph',
      text: 'Before placing a volume order, test from the intended operating positions with the intended receiver, antenna, enclosure and supply. For one-to-many control, record the result at every receiver. Success at the nearest door says little about the farthest one.',
    },
    {
      type: 'list',
      items: [
        'Test the farthest position and routes through walls or metal structures.',
        'Repeat with nearby equipment and other wireless systems operating normally.',
        'Use realistic remote orientation and mounting, and include the specified low-battery operating condition.',
        'Record missed commands, unintended actions and response time, then check that the result meets the application requirement.',
      ],
    },
    {
      type: 'quote',
      text: 'A range figure belongs on a data sheet. Reliable operation has to be checked where the system will be used.',
    },
    {
      type: 'heading',
      id: 'define-the-control-plan',
      text: 'Define the Control Plan Before Choosing Hardware',
    },
    {
      type: 'paragraph',
      text: 'One-to-many gives several receivers a shared authorized transmitter and command map. Many-to-one gives one receiver several authorized transmitters. Both depend on a usable radio link, correct enrollment and clearly defined outputs.',
    },
    {
      type: 'list',
      items: [
        'How many devices are involved, and should they act individually, in groups or on a common command?',
        'Does the application require confirmed completion or coordinated movement?',
        'How many people need remotes, how much spare capacity is required, and how will a lost remote be revoked?',
        'What are the site conditions, required operating positions and access-security requirements?',
        'What receiver models, protocols and button actions are already installed?',
      ],
    },
    {
      type: 'paragraph',
      text: 'At Dongguan Fengxian Electronics Technology Co., Ltd., these details provide a useful starting point for an RF remote or receiver-controller inquiry. Share the device count, user count, existing models, operating distance and intended button actions. Frequency, protocol, memory capacity and available control functions should then be confirmed for the proposed model and sample validation.',
    },
    {
      type: 'paragraph',
      text: 'Describe how many remotes and receivers you need, and what each button should do. Use the RF question form below to start with a control plan that can be checked.',
    },
  ],
  'wireless-receiver-controller-factory-testing': [
    {
      type: 'paragraph',
      text: 'An assembled wireless receiver controller powers up. Its indicator lights, and a paired remote makes a relay operate. That is a useful first check, but it is only one operating point.',
    },
    {
      type: 'paragraph',
      text: 'Before shipment, the questions become more specific: does reception meet the model\'s requirement, does every defined control function work, and does operation remain stable during the specified powered test? A missed command, an incorrect mode or an intermittent reset needs a different investigation.',
    },
    {
      type: 'paragraph',
      text: 'The practical approach is to separate reception, control functions and extended operation, then keep the evidence from each stage. A unit should reach packaging because it passed the agreed release criteria.',
    },
    {
      type: 'image',
      src: '/images/blog/wireless-receiver-controller-factory-testing/receiver-controller-test-bench.webp',
      srcSet: '/images/blog/wireless-receiver-controller-factory-testing/receiver-controller-test-bench-320.webp 320w, /images/blog/wireless-receiver-controller-factory-testing/receiver-controller-test-bench-640.webp 640w, /images/blog/wireless-receiver-controller-factory-testing/receiver-controller-test-bench.webp 1280w',
      alt: 'Illustration: A generic wireless receiver controller, handheld remote and unpowered instruments on a workbench',
      caption: 'A close-range response is an initial check; it does not establish the complete release result.',
    },
    {
      type: 'heading',
      id: 'define-release-conditions',
      text: 'Define the Conditions Before Calling a Test Passed',
    },
    {
      type: 'paragraph',
      text: 'A useful workflow is assembly and basic power checks, reception checks, functional checks, a specified powered soak or burn-in, review and retest of exceptions, then release for packaging. The station order can vary; the required checks and release gates must remain clear.',
    },
    {
      type: 'paragraph',
      text: 'Start with the model, hardware revision, firmware and order specification. Define supply conditions, radio settings, antenna or enclosure configuration, output load where applicable, test duration or repetitions, and the result that counts as a pass. State which checks cover every unit and which are performed on samples.',
    },
    {
      type: 'callout',
      title: 'Three checks, three different questions',
      text: 'Reception checks whether the radio message is recovered under defined conditions. Functional testing checks whether the controller executes it correctly. Extended powered operation checks whether that behavior stays stable over the specified observation period.',
    },
    {
      type: 'paragraph',
      text: 'Do not choose an acceptance limit after seeing the result. A borderline unit needs the prescribed disposition, and a doubtful fixture needs investigation before either a pass or a failure is assigned.',
    },
    {
      type: 'heading',
      id: 'reception-versus-sensitivity',
      text: 'Separate Reception Screening from Sensitivity Measurement',
    },
    {
      type: 'paragraph',
      text: 'Use a compatible transmitter or test waveform for the model\'s frequency, modulation and coding. A signal at the correct frequency is not enough if the receiver cannot decode its format. Control the transmit sequence and count successful receptions over a defined number of attempts.',
    },
    {
      type: 'paragraph',
      text: 'Receiver sensitivity is the minimum input level that meets a specified error or reception criterion under specified conditions. The waveform, data rate, receiver bandwidth, packet or command format, supply and measurement reference matter. A single successful command at a weak signal level does not establish that threshold.',
    },
    {
      type: 'paragraph',
      text: 'TI\'s CC1101 datasheet illustrates this dependence by specifying sensitivity together with radio settings and a packet-error criterion. Its chip figures are not automatically the sensitivity of an assembled controller.',
      links: [
        {
          text: 'TI\'s CC1101 datasheet',
          href: 'https://www.ti.com/lit/ds/symlink/cc1101.pdf',
        },
      ],
    },
    {
      type: 'paragraph',
      text: 'For a conducted measurement, define the RF input reference plane and account for cable and attenuator loss. A calibrated radiated setup can assess the complete antenna and enclosure path, but it uses a different measurement reference. Keep those results distinct when reporting performance.',
    },
    {
      type: 'paragraph',
      text: 'A fixed-distance transmitter or a fixed attenuation fixture can be useful for production screening. Unless the applied signal and threshold method are characterized, describe the result as reception performance or consistency screening rather than a measured sensitivity value in dBm.',
    },
    {
      type: 'paragraph',
      text: 'Keep transmitter output, battery or supply condition, antenna orientation, spacing and fixture arrangement stable. Nearby interference, enclosure changes and worn connections can shift the result. Reference units and fixture checks help detect a changed test setup; a reference unit alone does not calibrate an absolute RF level.',
    },
    {
      type: 'paragraph',
      text: 'Keysight\'s receiver test guidance connects input level with a defined BER or PER limit. For the difference between a component specification and an installed link, see our receiver sensitivity guide.',
      links: [
        {
          text: 'Keysight\'s receiver test guidance',
          href: 'https://www.keysight.com/blogs/en/tech/rfmw/2019/08/25/how-to-configure-wireless-receiver-dynamic-range-tests',
        },
        {
          text: 'receiver sensitivity guide',
          href: '/en/blog/rf-receiver-sensitivity-range-spec',
        },
      ],
    },
    {
      type: 'image',
      src: '/images/blog/wireless-receiver-controller-factory-testing/controlled-rf-reception-check.webp',
      srcSet: '/images/blog/wireless-receiver-controller-factory-testing/controlled-rf-reception-check-320.webp 320w, /images/blog/wireless-receiver-controller-factory-testing/controlled-rf-reception-check-640.webp 640w, /images/blog/wireless-receiver-controller-factory-testing/controlled-rf-reception-check.webp 1280w',
      alt: 'Illustration: A receiver controller, RF accessory, disconnected coaxial lead and instrument with a dark display',
      caption: 'Specify the stimulus and measurement reference. This illustrative setup contains no measured result.',
    },
    {
      type: 'heading',
      id: 'verify-functions-and-outputs',
      text: 'Check Every Defined Function and the Actual Output',
    },
    {
      type: 'paragraph',
      text: 'Once a valid command can be received, follow it through the controller. Verify the intended channel, its timing and its final state. An indicator or a relay click alone does not establish that the output contacts switched correctly.',
    },
    {
      type: 'paragraph',
      text: 'Build the checklist from the model\'s actual features. Depending on the specification, this may include remote enrollment and deletion, momentary operation, latching, interlocking, delays, external inputs and custom logic. Do not assume every controller supports all of these.',
    },
    {
      type: 'list',
      items: [
        'Exercise every defined channel and verify the actual output, not only the status indication.',
        'Check entry into each supported mode and the resulting behavior on subsequent commands.',
        'Verify enrollment, deletion and rejection of unauthorized or deleted credentials where specified.',
        'Check repeat commands and transitions between outputs, including the specified interlock behavior.',
        'Confirm power-up state, stored settings and recovery after a planned power cycle against the specification.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Use the specified load and an appropriate output measurement. Resistive, inductive and small-signal loads can place different demands on relay contacts. Testing without a load answers a different question from switching the intended load.',
    },
    {
      type: 'paragraph',
      text: 'OMRON\'s relay guidance explains that reliability depends on the switching conditions and load. Choose test cycles and loads within the component and product requirements; do not turn a release check into an uncontrolled endurance test.',
      links: [
        {
          text: 'OMRON\'s relay guidance',
          href: 'https://www.ia.omron.com/support/faq/answer/36/faq02147/',
        },
      ],
    },
    {
      type: 'heading',
      id: 'powered-soak-and-burn-in',
      text: 'Define What Extended Powered Operation Is Meant to Find',
    },
    {
      type: 'paragraph',
      text: 'Some faults appear immediately; others emerge after sustained operation or repeated commands. Unstable connections, abnormal supply behavior and intermittent control faults may become visible during an extended test. A symptom alone does not identify the failed component.',
    },
    {
      type: 'paragraph',
      text: 'Set the duration, supply, ambient conditions, enclosure state, load and action cycle in the model\'s inspection plan. A powered soak at ordinary conditions and a deliberately stressed burn-in are different procedures. The test name should describe what was actually performed.',
    },
    {
      type: 'paragraph',
      text: 'Record resets, missed commands, unintended output changes and interruptions throughout the test, using suitable monitoring for the fault of interest. A lamp that remains on, or a successful command only at the end, can miss a brief fault in the middle.',
    },
    {
      type: 'paragraph',
      text: 'Specify whether repeated output switching is needed and how much is permitted. More hours or more relay cycles are not automatically better: inappropriate stress can consume contact life or create damage that the normal application would not cause.',
    },
    {
      type: 'paragraph',
      text: 'Passing a finite soak screens for problems detectable under those conditions. It does not prove service life, field interference tolerance or long-term reliability. Those questions require the appropriate design validation and qualification evidence.',
    },
    {
      type: 'image',
      src: '/images/blog/wireless-receiver-controller-factory-testing/powered-soak-preparation.webp',
      srcSet: '/images/blog/wireless-receiver-controller-factory-testing/powered-soak-preparation-320.webp 320w, /images/blog/wireless-receiver-controller-factory-testing/powered-soak-preparation-640.webp 640w, /images/blog/wireless-receiver-controller-factory-testing/powered-soak-preparation.webp 1280w',
      alt: 'Illustration: Three generic receiver controllers spaced apart on a ventilated shelf beside a disconnected supply',
      caption: 'Duration, loading and monitoring belong in the test plan; the illustration shows preparation rather than an operating test.',
    },
    {
      type: 'heading',
      id: 'isolate-repair-and-retest',
      text: 'Keep Exceptions on Hold Until Their Disposition Is Complete',
    },
    {
      type: 'paragraph',
      text: 'Separate a failed unit from released stock and record the symptom, unit or lot identity, firmware, fixture and test conditions. Check the setup as well as the product: a faulty transmitter, connector or supply can make several good units appear defective.',
    },
    {
      type: 'paragraph',
      text: 'After repair, repeat the failed test under the relevant conditions and cover other checks that the repair could affect. Work on the supply or firmware can affect reception, timing and stored settings, so repeating only one button press may be insufficient.',
    },
    {
      type: 'paragraph',
      text: 'For an intermittent fault, use the defined reproduction and observation procedure. If the cause remains unresolved, keep the unit on hold under the inspection plan. Repeating a test until one pass appears is not evidence that the original fault has been removed.',
    },
    {
      type: 'paragraph',
      text: 'If similar failures recur across a lot, investigate the shared cause and assess other potentially affected units. Correcting one board does not close a batch-level issue. Release requires the applicable retests and a recorded disposition.',
    },
    {
      type: 'heading',
      id: 'batch-consistency-and-records',
      text: 'Make Batch Consistency Reviewable',
    },
    {
      type: 'paragraph',
      text: 'A good sample establishes a starting point. A shipment needs evidence that the agreed production checks were applied consistently. Comparable results need comparable fixtures, conditions, limits and revision control.',
    },
    {
      type: 'list',
      items: [
        'Identify the model, hardware and firmware revisions, lot or unit, and test-plan version.',
        'Record reception conditions and results without presenting a screening result as an absolute sensitivity measurement.',
        'Record channel and mode coverage, output load, powered-test duration and monitored exceptions.',
        'Keep repair history, retest outcomes and release status linked to the affected units.',
        'Agree the test coverage and any customer-specific conditions before production.',
      ],
    },
    {
      type: 'paragraph',
      text: 'At Dongguan Fengxian Electronics Technology Co., Ltd., this is the basis for discussing receiver-controller inspection requirements: what needs to be verified, under which conditions, and what evidence supports release. The exact method, duration and coverage should be confirmed for the selected model and order.',
    },
    {
      type: 'paragraph',
      text: 'The buyer\'s benefit is practical: fewer unexplained differences between units and clearer information when installation issues arise. Reception, functions and extended operation each contribute evidence; none substitutes for the other two.',
    },
    {
      type: 'quote',
      text: 'A controller is ready for shipment when its defined release checks are complete and exceptions are resolved with evidence.',
    },
  ],
  'different-codes-rf-remote-collisions': [
    {
      type: 'paragraph',
      text: 'Two cars reach an entrance almost together. Both drivers press a 433.92 MHz remote. Which command does the receiver hear?'
    },
    {
      type: 'paragraph',
      text: 'A common assumption is that different remote codes prevent a conflict. Each transmitter has its own identity, so the receiver should be able to tell them apart. The missing step is recovering enough of the radio message to read that identity in the first place.'
    },
    {
      type: 'paragraph',
      text: 'An address identifies a sender. A channel-access method governs when it transmits. Those are separate jobs. Understanding the difference explains why two legitimate remotes can work individually yet miss a command when pressed together.'
    },
    {
      type: 'image',
      src: '/images/blog/different-codes-rf-remote-collisions/two-remotes-one-channel.webp',
      srcSet: '/images/blog/different-codes-rf-remote-collisions/two-remotes-one-channel-320.webp 320w, /images/blog/different-codes-rf-remote-collisions/two-remotes-one-channel-640.webp 640w, /images/blog/different-codes-rf-remote-collisions/two-remotes-one-channel.webp 1280w',
      alt: 'Illustration: Two distinct four-button RF remotes beside a single receiver in an open enclosure',
      caption: 'Different transmitter identities do not assign separate airtime on a shared channel.'
    },
    {
      type: 'heading',
      text: 'Why Different Codes Still Share a Channel',
      id: 'different-codes-shared-channel'
    },
    {
      type: 'paragraph',
      text: 'A typical remote assembles data such as its identifier and button command; a rolling-code design also includes changing security-related data. The transmitter carries that message using a modulation scheme such as OOK, a form of ASK, or FSK. The exact frame format depends on the system.'
    },
    {
      type: 'paragraph',
      text: 'At the receiver, signal detection, synchronization and data recovery make later address and security checks possible. Address filtering does not remove an interfering signal before the receiver has recovered the relevant bits.'
    },
    {
      type: 'paragraph',
      text: 'When transmissions arrive within the same receive channel and overlap in time, their waveforms superimpose at the antenna. They do not physically crash into one another in the air. The combined input can disrupt synchronization, amplitude decisions or bit timing, leaving no valid frame to identify.'
    },
    {
      type: 'callout',
      title: 'Keep three requirements separate',
      text: 'Identity tells the receiver which transmitter a recovered frame claims to come from. Authentication and replay handling determine whether it should be trusted. Channel access determines when a transmitter attempts to use the radio channel.'
    },
    {
      type: 'paragraph',
      text: 'Rolling code does not schedule that access. Microchip\'s HCS301 documentation describes changing code data and receiver synchronization, not a mechanism that senses another transmitter before sending. Protection against replay depends on the implemented security and state handling; a changing code alone is not a complete security guarantee.',
      links: [
        {
          text: 'Microchip\'s HCS301 documentation',
          href: 'https://ww1.microchip.com/downloads/en/devicedoc/21143c.pdf'
        }
      ]
    },
    {
      type: 'heading',
      text: 'What a Receiver Can Recover from Overlap',
      id: 'receiver-overlap-outcomes'
    },
    {
      type: 'paragraph',
      text: 'Simultaneous button presses do not guarantee that both commands fail. The actual overlap depends on wake-up delay, frame duration, repeat timing and propagation. Button timing is only the start of the experiment.'
    },
    {
      type: 'paragraph',
      text: 'With substantial overlap and similar received powers, neither frame may be recovered. Under other conditions, the receiver may recover one transmission despite the other. A power difference can favor the stronger signal, but there is no universal rule that the strongest remote always wins.'
    },
    {
      type: 'paragraph',
      text: 'For OOK/ASK in particular, the result depends on receiver architecture, synchronization, automatic gain control, interference timing and the relative powers. Capture behavior must be checked on the intended receiver and protocol. Moving one remote closer is a useful test variation, but distance alone does not determine received power; antenna orientation, obstructions and reflections also matter.'
    },
    {
      type: 'paragraph',
      text: 'Describe the observation precisely: neither frame accepted, one accepted, or a later repeat accepted. A gate opening shows that an actionable command reached the control system; it does not show that the first radio frames were free of overlap.'
    },
    {
      type: 'heading',
      text: 'Repeated Frames Help When Timing Separates',
      id: 'repeat-frames-and-airtime'
    },
    {
      type: 'paragraph',
      text: 'Many one-way remote protocols send a short burst of repeated frames for one button press. If early frames overlap but a later frame arrives cleanly, the receiver may recover the command and the user sees normal operation.'
    },
    {
      type: 'paragraph',
      text: 'That is another opportunity, not delivery confirmation. Two transmitters with similar fixed repeat intervals can keep overlapping through the burst. Any benefit from accidental timing separation depends on the actual protocol and timing; it should not be assumed from a repeat-count specification.'
    },
    {
      type: 'paragraph',
      text: 'Adding repeats also adds channel use. Excessive repetition can make a busy channel harder for everyone to use. Define a bounded burst, permitted timing variation and receiver duplicate handling. One press should not unexpectedly become several toggle actions because several copies were received.'
    },
    {
      type: 'paragraph',
      text: 'A transmitter-only handheld can repeat a command without knowing whether it arrived. It cannot perform radio-based listen-before-talk or receive an ACK unless receive-capable hardware is present.'
    },
    {
      type: 'image',
      src: '/images/blog/different-codes-rf-remote-collisions/airtime-and-repeated-frames.webp',
      srcSet: '/images/blog/different-codes-rf-remote-collisions/airtime-and-repeated-frames-320.webp 320w, /images/blog/different-codes-rf-remote-collisions/airtime-and-repeated-frames-640.webp 640w, /images/blog/different-codes-rf-remote-collisions/airtime-and-repeated-frames.webp 1280w',
      alt: 'Illustration: Two remote circuit boards and disconnected probes prepared for a timing investigation',
      caption: 'Measure frame duration, spacing and the complete burst. The instruments in this illustration show no test result.'
    },
    {
      type: 'heading',
      text: 'Enrollment Capacity Is Not Concurrent Capacity',
      id: 'enrollment-versus-concurrency'
    },
    {
      type: 'paragraph',
      text: 'If a receiver specification says it can enroll 400 remotes, check what that number counts: transmitters, credentials or button assignments. It describes enrollment capacity, not evidence that the receiver can decode 400 simultaneous transmissions.'
    },
    {
      type: 'paragraph',
      text: 'For collisions, the useful starting points are how often devices transmit, how long their frames and bursts occupy the channel, and whether those attempts cluster in time. Include retries and, on two-way links, acknowledgment traffic.'
    },
    {
      type: 'paragraph',
      text: 'A large enrolled population can generate little traffic when most devices remain silent. A smaller group that sends long or frequent bursts can create much more contention. A shift change or a queue arriving at one entrance can produce a concentrated burst of activity even when daily average traffic is low.'
    },
    {
      type: 'paragraph',
      text: 'Airtime is therefore useful, but it is not the only predictor. Relative power, frame timing, receive bandwidth, receiver recovery and unrelated interference affect the outcome. Traffic estimates should use the intended busy period and be checked against observed command success and delay.'
    },
    {
      type: 'heading',
      text: 'Listen-Before-Talk Needs Hardware and a Protocol',
      id: 'cca-lbt-and-backoff'
    },
    {
      type: 'paragraph',
      text: 'Clear channel assessment, CCA, estimates whether the channel is busy. A listen-before-talk procedure uses that assessment to decide when to attempt a transmission. A typical contention rule is to transmit after an acceptable clear assessment, defer when busy, then reassess after a defined wait.'
    },
    {
      type: 'paragraph',
      text: 'TI\'s CC1101 datasheet documents RSSI, programmable carrier sense and CCA support. These are radio capabilities that firmware can use. They do not by themselves specify a complete access protocol or prove that a finished remote implements one.',
      links: [
        {
          text: 'TI\'s CC1101 datasheet',
          href: 'https://www.ti.com/lit/ds/symlink/cc1101.pdf'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'The implementation must define the sensing threshold, observation time, valid radio state, receive-to-transmit transition and busy-channel response. The chosen method must notice the traffic of concern, including its modulation and gaps. A register setting copied from another product is not a coexistence test.'
    },
    {
      type: 'paragraph',
      text: 'Two nodes can both sense an idle channel and start transmitting together. Hidden nodes create another limit: two remotes may not hear each other even though both reach the same receiver. A clear assessment at the transmitter is not proof that the receiver has an interference-free channel.'
    },
    {
      type: 'paragraph',
      text: 'Random backoff reduces the chance that competing devices repeatedly retry in step. The protocol still needs a backoff rule, a fresh assessment, limits on attempts and a maximum command age. Randomization reduces contention; it does not guarantee a delivery time under arbitrary interference.'
    },
    {
      type: 'image',
      src: '/images/blog/different-codes-rf-remote-collisions/two-way-radio-hardware.webp',
      srcSet: '/images/blog/different-codes-rf-remote-collisions/two-way-radio-hardware-320.webp 320w, /images/blog/different-codes-rf-remote-collisions/two-way-radio-hardware-640.webp 640w, /images/blog/different-codes-rf-remote-collisions/two-way-radio-hardware.webp 1280w',
      alt: 'Illustration: Two generic radio development modules with antennas beside a separate control board',
      caption: 'Listening and return acknowledgments need suitable hardware and protocol support at the participating nodes.'
    },
    {
      type: 'heading',
      text: 'Define What an ACK Actually Confirms',
      id: 'ack-and-command-completion'
    },
    {
      type: 'paragraph',
      text: 'A two-way link can send an acknowledgment after reception and retry when the expected ACK is absent. Both ends must support the return exchange, including turnaround timing, an ACK receive window and retry handling.'
    },
    {
      type: 'paragraph',
      text: 'An absent ACK does not prove that the original command was lost. The receiver may have received it while the return ACK was lost. Retries therefore need transaction identification and duplicate suppression, especially for commands that toggle an output.'
    },
    {
      type: 'paragraph',
      text: 'Nordic\'s Enhanced ShockBurst guide documents acknowledgment, retransmission and duplicate handling in a particular two-way radio protocol. It is an example of those mechanisms working together, not a feature that can be assumed on an ordinary one-way gate remote.',
      links: [
        {
          text: 'Nordic\'s Enhanced ShockBurst guide',
          href: 'https://docs.nordicsemi.com/r/bundle/nrf5_sdk_v17.0.2/page/esb_users_guide.html'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'Specify the acknowledgment stage: packet received, command authenticated, command accepted, or action completed. A radio-level ACK alone does not confirm relay operation or gate position. Physical completion requires the relevant equipment feedback.'
    },
    {
      type: 'paragraph',
      text: 'Listening, waiting and unsuccessful retries use energy and add delay. A better design for the application balances command success, latency, battery use and cost. Adding ACKs does not by itself make a control system suitable for safety-related machinery.'
    },
    {
      type: 'heading',
      text: 'Europe: Frequency Is Only Part of the Specification',
      id: 'european-spectrum-requirements'
    },
    {
      type: 'paragraph',
      text: 'For a European-market product, asking whether a radio can operate at 868 MHz leaves important requirements unanswered. Select the exact permitted band and device category, then assess radiated power, occupied bandwidth and the applicable channel-access and occupation rules.'
    },
    {
      type: 'paragraph',
      text: 'ETSI EN 300 220-2 V3.3.1 sets out technical requirements for non-specific short-range radio equipment, including band-dependent duty-cycle or polite-access provisions. A chip with CCA capability is not proof that the complete product meets the applicable sensing and timing requirements.',
      links: [
        {
          text: 'ETSI EN 300 220-2 V3.3.1',
          href: 'https://www.etsi.org/deliver/etsi_en/300200_300299/30022002/03.03.01_60/en_30022002v030301p.pdf'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'The EU short-range-device spectrum decision is another relevant starting point. Check current national implementation and the assessment requirements for the destination and equipment. Do not apply one duty-cycle or power figure to every product described as 868 MHz.',
      links: [
        {
          text: 'EU short-range-device spectrum decision',
          href: 'https://eur-lex.europa.eu/eli/dec_impl/2025/105/oj/eng'
        }
      ]
    },
    {
      type: 'heading',
      text: 'Test Command Delivery in the Intended Installation',
      id: 'test-overlap-and-delivery'
    },
    {
      type: 'paragraph',
      text: 'Return to the two drivers at the entrance. Their different codes can help the receiver distinguish valid messages once recovered. Whether both commands arrive in time depends on the radio conditions and protocol.'
    },
    {
      type: 'list',
      items: [
        'Establish a baseline with each registered remote operating alone at the intended positions.',
        'Vary the delay between presses, including near-simultaneous starts, overlapping bursts and repeated attempts.',
        'Vary orientation and relative received power; include close/far and similar-power cases.',
        'Record accepted commands, missed commands, duplicates and time to response during a representative busy period.',
        'For two-way links, separate lost commands from lost ACKs and check retry limits, stale-command rejection and duplicate suppression.',
        'Observe the controller output and equipment state separately when physical completion matters.'
      ]
    },
    {
      type: 'paragraph',
      text: 'For a broader comparison of repetition, frequency separation, time slots, hopping and carrier sensing, see our RF collision hardware and protocol guide. Receiver sensitivity and security claims should also be checked independently of a concurrency claim.',
      links: [
        {
          text: 'RF collision hardware and protocol guide',
          href: '/en/blog/rf-remote-control-concurrency-anti-collision'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'At Dongguan Fengxian Electronics Technology Co., Ltd., the useful question is how the complete link delivers commands in its intended environment. For development or sourcing discussions, include the receiver model, market, traffic pattern, response deadline and supported link direction. These details are more useful than a rolling-code label or enrollment count alone.'
    },
    {
      type: 'quote',
      text: 'Different identities can share the same channel. Reliable command delivery needs a radio and protocol designed for the traffic that actually uses it.'
    },
  ],
  'rf-remote-buttons-not-working': [
    {
      type: 'paragraph',
      text: 'You press the remote, and nothing happens. A weak battery, an intermittent battery contact, a worn button or a controller fault can all produce that symptom. So can a working transmitter whose command the receiver does not accept.'
    },
    {
      type: 'paragraph',
      text: 'At Dongguan Fengxian Electronics Technology Co., Ltd., we approach this problem by following the power and signal path. Start with checks that are quick and informative, then move to board-level measurements when the earlier stages have been verified.'
    },
    {
      type: 'paragraph',
      text: 'First record the symptom: one button or every button, intermittent operation or complete failure, close-range operation or no response at any distance. If a known-working, compatible remote already enrolled in the receiver is available, try it at the same location before opening the faulty unit.'
    },
    {
      type: 'image',
      src: '/images/blog/rf-remote-buttons-not-working/battery-and-signal-chain.webp',
      srcSet: '/images/blog/rf-remote-buttons-not-working/battery-and-signal-chain-320.webp 320w, /images/blog/rf-remote-buttons-not-working/battery-and-signal-chain-640.webp 640w, /images/blog/rf-remote-buttons-not-working/battery-and-signal-chain.webp 1280w',
      alt: 'Illustration: A disassembled four-button RF remote, coin cell, meter and separate receiver board',
      caption: 'Follow the power and command path; an unresponsive installation does not identify the failed component.'
    },
    {
      type: 'heading',
      text: 'What Actually Happens When You Press a Button?',
      id: 'what-a-button-press-does'
    },
    {
      type: 'paragraph',
      text: 'An RF remote turns a button press into a coded radio transmission. The battery supplies energy, the button changes an electrical input, and the MCU or dedicated encoder creates the command. The radio circuit and antenna transmit it; the receiver must receive, recognize and authorize it before issuing an output.'
    },
    {
      type: 'callout',
      title: 'Follow the chain',
      text: 'Battery power → button input → MCU or encoder → RF transmitter and antenna → receiver and command acceptance → equipment response.'
    },
    {
      type: 'paragraph',
      text: 'A fault anywhere along this path can look like a dead button. At each stage, ask two questions: is the required input present, and does the expected output follow? A tactile click is not proof of electrical contact; an LED flash is not proof of a valid radio command.'
    },
    {
      type: 'paragraph',
      text: 'For bench troubleshooting, a useful default is battery → buttons → MCU → RF link and receiver. This is an order of verification cost, not a rule that prevents a quick receiver comparison first. Follow the evidence when a check identifies a different branch.'
    },
    {
      type: 'heading',
      text: 'Start with the Battery and Its Contacts',
      id: 'battery-and-contacts'
    },
    {
      type: 'paragraph',
      text: 'Fit a fresh battery of the specified type and confirm polarity. Inspect the holder for loose or deformed spring contacts, oxidation and leakage. A connection that changes when the case is squeezed can explain intermittent operation even when the cell itself is good.'
    },
    {
      type: 'paragraph',
      text: 'Measure idle voltage, but do not use it as the final verdict. Panasonic\'s CR2032 datasheet specifies a nominal 3 V cell and a 0.2 mA continuous drain, with discharge curves using a 2.0 V cutoff. That cutoff describes the battery test; it is not a universal remote-control replacement threshold.',
      links: [
        {
          text: 'Panasonic\'s CR2032 datasheet',
          href: 'https://energy.panasonic.com/dam/master/pdf/en/datasheet/lithium/CR2032_Datasheet_EN_240701.pdf'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'The useful measurement is voltage during an actual transmission. An aged cell can show an acceptable idle voltage and then sag under a pulse load. Battery contact resistance adds another voltage drop. Either can bring the controller or radio below its operating limit.'
    },
    {
      type: 'paragraph',
      text: 'With the battery installed, measure across its terminals while pressing a button and compare the result with idle voltage. Also measure at the controller supply pins: a stable cell voltage with a falling board supply points toward the holder, connections or power path. Some remotes send a short burst rather than transmitting continuously while a key is held.'
    },
    {
      type: 'paragraph',
      text: 'A multimeter can miss a brief voltage dip. If the symptom suggests resets during transmission, use an oscilloscope with an appropriate probe connection and capture the supply minimum during the burst. Compare it with the controller and radio operating limits and any brownout setting.'
    },
    {
      type: 'paragraph',
      text: 'Cold conditions can reduce the available voltage margin under load. Use the exact cell manufacturer\'s temperature and pulse-discharge data rather than treating every CR2032 as identical. A rated temperature range alone does not guarantee that a particular remote will transmit reliably at its lower limit.'
    },
    {
      type: 'paragraph',
      text: 'For a deeper explanation of charge budget versus pulse voltage, see our CR2032 battery-life guide. If a fresh cell restores operation, repeat the test with the case assembled and check that the contacts remain stable. If the fault persists, move to the button input.',
      links: [
        {
          text: 'CR2032 battery-life guide',
          href: '/en/blog/cr2032-rf-remote-battery-life'
        }
      ]
    },
    {
      type: 'image',
      src: '/images/blog/rf-remote-buttons-not-working/loaded-battery-check.webp',
      srcSet: '/images/blog/rf-remote-buttons-not-working/loaded-battery-check-320.webp 320w, /images/blog/rf-remote-buttons-not-working/loaded-battery-check-640.webp 640w, /images/blog/rf-remote-buttons-not-working/loaded-battery-check.webp 1280w',
      alt: 'Illustration: An installed coin cell in an open RF remote with disconnected probes and blank-screen instruments nearby',
      caption: 'Check the cell and controller supply during transmission. The illustration shows no measured voltage or waveform.'
    },
    {
      type: 'heading',
      text: 'Verify the Button Electrically',
      id: 'button-input-check'
    },
    {
      type: 'paragraph',
      text: 'A button is an electrical switch as well as a mechanical part. Pressing it must produce an input level that the controller recognizes. Many designs pull an input to ground against a pull-up resistor; others use a key matrix, pull-downs or a resistor ladder. Check the actual circuit before interpreting a measurement.'
    },
    {
      type: 'list',
      items: [
        'Check for a sticking keycap, poor return, misalignment or a damaged actuator.',
        'On silicone keypads, inspect conductive pills and PCB contact pads for wear, contamination or damage.',
        'On tactile switches, check the switch contacts, solder joints and surrounding traces.',
        'Look for moisture residue, cracked tracks and a shared connection that could affect several keys.'
      ]
    },
    {
      type: 'paragraph',
      text: 'Remove the battery before measuring resistance. On an isolated, normally open switch, the released state should be open and the pressed state should show a stable contact resistance within the part specification. In-circuit measurements may include parallel paths or semiconductor junctions; isolate the component if the result is ambiguous.'
    },
    {
      type: 'paragraph',
      text: 'Do not use a single resistance threshold for every button. Carbon-pill contacts and metal-contact switches have different specifications. Whether the controller recognizes a press depends on contact resistance, pull-up or pull-down resistance, input thresholds and the scanning method.'
    },
    {
      type: 'paragraph',
      text: 'If the contact test passes, restore power and verify the input change at the MCU using the schematic and device datasheet. A switch can close correctly while a broken trace prevents the input from changing. For scanned keys, a multimeter may average the signal; a scope can show what happens during the scan.'
    },
    {
      type: 'paragraph',
      text: 'One failed key points first to that button, its trace or its assigned function. All keys failing points toward shared circuitry, but does not prove an MCU fault: a broken common keypad connection, a stuck key or a scanning problem can also affect the whole keypad.'
    },
    {
      type: 'paragraph',
      text: 'Clean only with a method approved for the keypad and PCB materials. Do not assume alcohol is suitable for every conductive coating, adhesive or printed legend. Avoid abrasive rubbing of carbon pads. Replace a worn keypad or switch assembly when cleaning cannot restore a stable contact.'
    },
    {
      type: 'image',
      src: '/images/blog/rf-remote-buttons-not-working/button-contact-inspection.webp',
      srcSet: '/images/blog/rf-remote-buttons-not-working/button-contact-inspection-320.webp 320w, /images/blog/rf-remote-buttons-not-working/button-contact-inspection-640.webp 640w, /images/blog/rf-remote-buttons-not-working/button-contact-inspection.webp 1280w',
      alt: 'Illustration: The conductive underside of a silicone four-button keypad beside its PCB contact pads',
      caption: 'Inspect both sides of the contact interface. Mechanical feel alone cannot confirm a recognized button input.'
    },
    {
      type: 'heading',
      text: 'Check MCU Operation Before Blaming the Chip',
      id: 'mcu-operation-check'
    },
    {
      type: 'paragraph',
      text: 'Once the power path and button input are verified, check the controller. It needs a valid supply, correct reset behavior, a working clock and executing firmware. Dedicated encoders and integrated radio controllers may combine these functions differently; use the actual device documentation.'
    },
    {
      type: 'list',
      items: [
        'Supply: measure at the controller pins during wake-up and transmission; inspect the power path and decoupling components.',
        'Reset: look for repeated restarts or a reset input held active, where that input is exposed.',
        'Clock: check the oscillator arrangement, assembly and configuration; an external crystal is not required by every design.',
        'Execution: use a documented debug interface, diagnostic output or command-data signal to confirm that the detected press reaches the transmission routine.'
      ]
    },
    {
      type: 'paragraph',
      text: 'Take care when checking a crystal oscillator. Probe capacitance can change its frequency or stop it oscillating. Texas Instruments\' oscillator guide explains this measurement effect; a buffered clock output or a suitable low-capacitance probe is preferable when the design provides that option.',
      links: [
        {
          text: 'Texas Instruments\' oscillator guide',
          href: 'https://www.ti.com/lit/an/slaa322b/slaa322b.pdf'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'An LED flash is a clue, not a pass certificate. Depending on the circuit, it may show that a button path or some firmware is active. It does not establish RF output, the correct code or receiver acceptance. An unlit LED can also be a failed LED or driver, and some remotes have no indicator at all.'
    },
    {
      type: 'paragraph',
      text: 'The Si4010 datasheet is one example of a remote-control device with an MCU, radio, LED driver and button wake-up functions in one chip. Its arrangement illustrates why a visible indicator and a successful RF command must still be verified separately; it does not identify the chip inside an unknown remote.',
      links: [
        {
          text: 'Si4010 datasheet',
          href: 'https://www.silabs.com/documents/public/data-sheets/Si4010.pdf'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'ESD damage is a possible cause of an abnormal input or excessive current, but those symptoms are not unique to ESD. Check for contamination, shorts and damaged peripheral components before concluding that the MCU must be replaced.'
    },
    {
      type: 'paragraph',
      text: 'If the same failure is reproducible across units with verified hardware, investigate wake-up handling, debounce, key scanning and the transmit sequence. Record the firmware revision and a repeatable trigger rather than diagnosing firmware from the absence of a response alone.'
    },
    {
      type: 'heading',
      text: 'Separate the RF Link from Receiver Acceptance',
      id: 'rf-link-and-receiver'
    },
    {
      type: 'paragraph',
      text: 'A controller can execute a command while the radio fails to transmit it. Conversely, a transmitter can emit a signal that the receiver hears but rejects. Check frequency, modulation, protocol and enrollment as separate requirements.'
    },
    {
      type: 'list',
      items: [
        'Transmitter: inspect the radio circuit, oscillator or frequency-setting parts, matching components, antenna and solder joints; compare RF output with a known-good unit where suitable equipment is available.',
        'Receiver: check its supply, antenna and response to an already enrolled compatible transmitter.',
        'Code acceptance: verify the supported code family, transmitter identity, button assignment and documented enrollment or synchronization procedure.',
        'Environment: repeat at a controlled distance and orientation; consider metal obstruction and interference on the operating channel.',
        'Equipment: if the receiver accepts the command or switches its output but the load does not move, investigate the downstream control, interlocks and actuator.'
      ]
    },
    {
      type: 'paragraph',
      text: 'Use an already enrolled, known-working compatible remote at the same receiver and location. If it works and the suspect remote does not, focus on the suspect transmitter and its registration or assigned function. If both fail, examine common conditions such as receiver power, interference and the connected equipment. Neither result alone identifies a specific failed component.'
    },
    {
      type: 'paragraph',
      text: 'Rolling-code synchronization and transmitter enrollment are different operations. Microchip\'s HCS301 documentation describes an example of receiver synchronization windows and sequential transmissions for resynchronization. The exact behavior depends on the receiver implementation; follow its instructions rather than assuming that re-pairing will recover lost credentials or repair corrupt transmitter memory.',
      links: [
        {
          text: 'Microchip\'s HCS301 documentation',
          href: 'https://ww1.microchip.com/downloads/en/devicedoc/21143c.pdf'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'If operation is possible only at short range, use the short-range diagnostic guide. If transmission appears normal but enrollment fails, use the replacement-remote pairing guide. Operating bands and power limits depend on the destination market and device category; a troubleshooting article cannot supply a universal legal frequency or power setting.',
      links: [
        {
          text: 'short-range diagnostic guide',
          href: '/en/blog/433mhz-remote-short-range-diagnostics'
        },
        {
          text: 'replacement-remote pairing guide',
          href: '/en/blog/third-party-rf-remote-brand-receiver-pairing'
        }
      ]
    },
    {
      type: 'heading',
      text: 'A Quick Troubleshooting Checklist',
      id: 'quick-troubleshooting-checklist'
    },
    {
      type: 'list',
      items: [
        '1. Record whether the fault affects one key, all keys, range or intermittent operation. Try an already enrolled, known-working compatible remote if available.',
        '2. Fit a fresh battery of the specified type and inspect polarity, holder contacts and the power path.',
        '3. Measure voltage during transmission at the battery and controller supply; use a scope if a brief dip is suspected.',
        '4. With power removed, check button contacts. With power restored, verify the expected controller input change.',
        '5. Treat LED behavior as a clue. Verify controller supply, reset, clock and command execution where accessible.',
        '6. Check RF output, receiver acceptance and the documented enrollment or synchronization procedure.',
        '7. If the receiver output operates, follow the fault into the connected equipment. After a repair, retest every key with the case assembled.'
      ]
    },
    {
      type: 'paragraph',
      text: 'Keep a short fault record: remote and receiver models, battery type, affected buttons, idle and minimum loaded voltage, test distance and the comparison result. These details make a supplier discussion more useful than simply reporting that the remote does not work.'
    },
    {
      type: 'heading',
      text: 'Reliability Starts in the Design',
      id: 'reliability-by-design'
    },
    {
      type: 'paragraph',
      text: 'Troubleshooting addresses a failure after it occurs. Design verification should give the battery and power path enough margin for temperature, aging and transmission pulses; match the button assembly to its use; and validate controller wake-up, reset, decoupling and ESD protection.'
    },
    {
      type: 'paragraph',
      text: 'Test the complete remote with its housing, battery and intended receiver. Check each button and repeated operation under the agreed conditions. Component specifications guide that work, but do not replace finished-product verification.'
    },
    {
      type: 'paragraph',
      text: 'At Dongguan Fengxian Electronics Technology Co., Ltd., this is the approach we use for remote-control development and troubleshooting: return to the required input and output at each stage, then locate the break in the chain. If you are investigating a similar fault, use the RF question form below and include the models and measurements you have checked.'
    },
    {
      type: 'paragraph',
      text: 'The component examples and values above are general references. Use the datasheets for the actual battery, switch, controller and radio, together with the receiver instructions and complete-product test results, to set the limits for your design.'
    },
  ],
  'same-shell-hidden-downgrade-remote-manufacturing-quality': [
    {
      type: 'paragraph',
      text: 'Two suppliers quote remotes with the same housing, but one quote is higher. The useful question is what differs in the specification and delivery scope, and whether that difference matters to your installation.'
    },
    {
      type: 'paragraph',
      text: 'The circuit board, firmware, battery contacts and button assembly may differ under a shared shell. The quotes may also include different quantities, packaging or test requirements. Appearance cannot settle any of those questions.'
    },
    {
      type: 'paragraph',
      text: 'Start with the approved receiver model and operating conditions. A teardown can reveal construction differences; functional and environmental checks show whether they affect the result you are buying.'
    },
    {
      type: 'image',
      src: illustratedBlogPhotos['same-shell-hidden-downgrade-remote-manufacturing-quality'].image,
      srcSet: illustratedBlogPhotos['same-shell-hidden-downgrade-remote-manufacturing-quality'].imageSrcSet,
      alt: 'Illustration: An opened remote, circuit board and magnifying lens on a workbench',
      caption: 'Illustration of the article topic.'
    },
    {
      type: 'heading',
      text: 'What a Shared Housing Can Hide',
      id: 'the-biggest-lie-they-look-the-same'
    },
    {
      type: 'paragraph',
      text: 'An existing housing can be used with more than one circuit design. Its shape tells you about size and handling, but does not identify the radio protocol or the parts inside.'
    },
    {
      type: 'paragraph',
      text: 'Ask each supplier for the exact product revision, compatible receiver list and included battery and accessories. Two offers become comparable only when those details match.'
    },
    {
      type: 'paragraph',
      text: 'A PCB photograph helps check component placement and obvious assembly defects. It cannot establish firmware behavior, component authenticity or service life.'
    },
    {
      type: 'paragraph',
      text: 'Treat missing parts or a changed board as questions to investigate against the approved design. A lower price alone is no evidence of recycled components, omitted protection or deliberate substitution.'
    },
    {
      type: 'list',
      items: [
        'Compare the PCB drawing and material specification with the approved revision.',
        'Check component part numbers and permitted alternatives against the bill of materials.',
        'Identify the firmware version and the receiver models used for validation.',
        'Compare inspection coverage and final test limits, including how failures are handled.'
      ]
    },
    {
      type: 'callout',
      title: 'Ask for the difference',
      text: 'Have each supplier name the changes behind the quote. Pay for a requirement or a measured result that you need; a price premium is not a quality record.'
    },
    {
      type: 'heading',
      text: 'PCB Material: Specify the Grade',
      id: 'pcb-material-fr-4-vs-paper-based-board'
    },
    {
      type: 'paragraph',
      text: 'FR-4 and paper phenolic describe different laminate families. Board thickness, material grade, mechanical support and exposure conditions all matter. A photograph or a yellow, brown or green surface is not enough to identify the laminate.'
    },
    {
      type: 'paragraph',
      text: 'Paper phenolic is not automatically unsuitable for a remote. Panasonic lists remote controls among the applications for its R-8700 family. That is a reason to check the specified grade and its limits, rather than reject every paper-based board.',
      links: [
        {
          text: 'Panasonic',
          href: 'https://industrial.panasonic.com/ww/products/pt/paper-phenolic/pphr8700'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'FR-4 is also not one uniform performance specification. Isola\'s FR406 datasheet gives properties and test methods for a particular laminate. Use the actual supplier datasheet when comparing heat resistance, moisture behavior and mechanical properties.',
      links: [
        {
          text: 'FR406 datasheet',
          href: 'https://www.isola-group.com/wp-content/uploads/data-sheets/fr406.pdf'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'Choose the board material for the assembly process and intended environment, then verify the finished remote. A laminate claim does not prove that the housing keeps out water or that the assembled product survives a drop.'
    },
    {
      type: 'heading',
      text: 'Range Changes When the Remote Is Held',
      id: 'emc-design-and-the-hand-effect'
    },
    {
      type: 'paragraph',
      text: 'If range changes with grip or orientation, repeat the observation with the case assembled and a fresh battery. Compare normal hand positions at the same receiver location.'
    },
    {
      type: 'paragraph',
      text: 'The housing and a user\'s hand can change antenna impedance and efficiency. Texas Instruments shows this effect in its antenna matching guide. The size of the change depends on the antenna and surrounding materials; it is not a price-based defect diagnosis.',
      links: [
        {
          text: 'antenna matching guide',
          href: 'https://www.ti.com/lit/pdf/swra726'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'The layout and matching network need to suit the assembled product. Ask for results measured with the intended housing, battery and normal grip, rather than relying on an exposed PCB demonstration.'
    },
    {
      type: 'paragraph',
      text: 'If two remotes behave differently, record success counts and orientation before changing components. This gives the supplier a reproducible symptom to investigate.'
    },
    {
      type: 'heading',
      text: 'Check Buttons as an Assembly',
      id: 'button-lifespan-is-a-real-return-driver'
    },
    {
      type: 'paragraph',
      text: 'Button performance depends on the switch or dome, the housing actuator, PCB support and firmware debounce. A soft or inconsistent feel may come from alignment as well as the contact itself.'
    },
    {
      type: 'paragraph',
      text: 'Check every button for missed commands, repeated commands and sticking. A crisp click at sample approval tells you little about what happens after repeated use.'
    },
    {
      type: 'paragraph',
      text: 'Switch life claims belong to a particular part and test conditions. Omron\'s B3F documentation distinguishes models and contact options. Request the part number and relevant rating, then verify the complete button assembly under your intended use.',
      links: [
        {
          text: 'B3F documentation',
          href: 'https://components.omron.com/sg-en/products/switches/B3F'
        }
      ]
    },
    {
      type: 'list',
      items: [
        'Compare operating force and return behavior across all keys.',
        'Ask for the switch or dome part number and the life-test conditions.',
        'Check missed or repeated commands before and after the agreed durability test.',
        'Inspect actuator alignment and PCB support in assembled samples.'
      ]
    },
    {
      type: 'heading',
      text: 'What SMT and AOI Actually Check',
      id: 'smt-and-aoi-where-process-discipline-shows'
    },
    {
      type: 'paragraph',
      text: 'A repeatable design still needs a controlled assembly process. The evidence to request is the inspection criteria, results and response to defects.'
    },
    {
      type: 'paragraph',
      text: 'An SMT line can place components consistently, but equipment ownership does not prove the stencil, soldering profile or inspection program is correct for this board.'
    },
    {
      type: 'paragraph',
      text: 'Automated optical inspection examines visible component and solder geometry. Omron describes AOI and X-ray inspection as parts of process quality control. These inspections do not establish that a remote sends the correct protocol or pairs with your receiver.',
      links: [
        {
          text: 'Omron',
          href: 'https://www.omron.com/global/en/technology/omrontechnics/vol54/009.html'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'Ask which defects the line checks, who reviews flagged boards and what happens after rework. A list of machines is less useful than a traceable pass or fail record.'
    },
    {
      type: 'heading',
      text: 'When Environmental Protection Is Needed',
      id: 'conformal-coating-is-invisible-until-it-matters'
    },
    {
      type: 'paragraph',
      text: 'Conformal coating should be a design decision based on exposure, not an assumed feature of a higher-priced remote.'
    },
    {
      type: 'paragraph',
      text: 'A handheld remote kept indoors has different exposure from one left in a vehicle or used near salt spray. Define storage and operating conditions separately.'
    },
    {
      type: 'paragraph',
      text: 'Coating suppliers such as MG Chemicals describe protection against moisture and contaminants. That does not establish an ingress rating for the complete remote. Seams, buttons and battery openings still need to be considered.',
      links: [
        {
          text: 'MG Chemicals',
          href: 'https://mgchemicals.com/ruggedization/'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'If coating is specified, ask for the material, covered areas, application and cure controls. Verify that battery contacts and button mechanisms still work, and test the finished product under the agreed exposure.'
    },
    {
      type: 'heading',
      text: 'Define the Final Functional Test',
      id: 'functional-testing-cannot-be-replaced-by-hope'
    },
    {
      type: 'paragraph',
      text: 'Separate production screening from qualification tests. A short test can screen every unit for basic faults; extended range, drop and environmental tests need their own sampling plan and acceptance criteria.'
    },
    {
      type: 'paragraph',
      text: 'For production screening, specify every button\'s response, radio frequency and output checks, current draw and decode behavior. Include actual receiver pairing where it is necessary to verify the delivered configuration.'
    },
    {
      type: 'paragraph',
      text: 'Record the equipment or fixture, limits and product revision. A pass light is meaningful only if the test would detect the faults you are trying to prevent.'
    },
    {
      type: 'heading',
      text: 'Compare Total Cost with Evidence',
      id: 'run-the-numbers-like-a-procurement-director'
    },
    {
      type: 'paragraph',
      text: 'Add the costs you can establish: delivered units, tooling or setup charges, packaging, freight and the agreed warranty or replacement terms.'
    },
    {
      type: 'paragraph',
      text: 'Keep assumptions visible when estimating support costs. Use your return history and cost per case; do not invent a failure rate to justify either quote.'
    },
    {
      type: 'paragraph',
      text: 'A replacement may involve handling, diagnosis and shipping as well as the unit itself. Which of these costs applies depends on your sales channel and service agreement.'
    },
    {
      type: 'paragraph',
      text: 'A higher price may be worthwhile if the supplier provides a required specification or better verified performance. Without that evidence, the price difference remains unexplained.'
    },
    {
      type: 'heading',
      text: 'What to Ask Before Approval',
      id: 'what-to-check-before-choosing-a-factory'
    },
    {
      type: 'list',
      items: [
        'Request the exact receiver compatibility list and product revision.',
        'Obtain the laminate grade and key component part numbers.',
        'Review range results with the finished housing, battery and normal grip.',
        'Agree button durability and environmental checks for the intended use.',
        'Review inspection coverage, final test limits and rework handling.',
        'Retain a signed sample and the specification it represents.',
        'Check production samples against that reference and require notice of relevant changes.'
      ]
    },
    {
      type: 'heading',
      text: 'Investigate Failures Against the Approved Product',
      id: 'manufacturing-is-delivering-trust'
    },
    {
      type: 'paragraph',
      text: 'When a batch develops faults, group the symptoms first: pairing failures, short range, missed button presses or damaged contacts. A single label such as poor quality can hide different causes.'
    },
    {
      type: 'paragraph',
      text: 'Compare failed units with working units from the same batch and with the retained sample. Record board revision, visible changes and the conditions that reproduce the fault.'
    },
    {
      type: 'quote',
      text: 'A shared shell tells you what fits in the hand. Approval needs a specification and results from the assembled remote.'
    },
    {
      type: 'paragraph',
      text: 'Send the supplier the failed samples, observations and agreed limits. A teardown can guide the investigation, but the repair or replacement decision should follow evidence of the fault and the purchasing agreement.'
    },
  ],
  'build-your-own-rf-remote-control-beginner-guide': [
    {
      type: 'paragraph',
      text: 'If an RF receiver detects a signal but the relay does not behave as expected, check what the receiver output actually represents. A raw data output and a decoded control output serve different purposes.'
    },
    {
      type: 'paragraph',
      text: 'For a first build, use a documented handheld transmitter and a matched receiver with decoded control outputs. This avoids having to design the radio, packet format and decoder at the same time.'
    },
    {
      type: 'paragraph',
      text: 'The goal here is one button controlling a small low-voltage lamp or buzzer. There is no universal wiring diagram: supply voltage, output levels and relay trigger behavior must come from the selected boards.'
    },
    {
      type: 'image',
      src: illustratedBlogPhotos['build-your-own-rf-remote-control-beginner-guide'].image,
      srcSet: illustratedBlogPhotos['build-your-own-rf-remote-control-beginner-guide'].imageSrcSet,
      alt: 'Illustration: Separate transmitter and receiver modules, a relay module and insulated wires',
      caption: 'Illustration of the article topic.'
    },
    {
      type: 'heading',
      text: 'RF and Infrared Take Different Paths',
      id: 'rf-vs-infrared'
    },
    {
      type: 'paragraph',
      text: 'An infrared remote sends modulated light to a light-sensitive receiver. It generally needs a usable optical path, although reflections can sometimes carry the signal around a room.'
    },
    {
      type: 'paragraph',
      text: 'Walls and opaque objects can interrupt that path. This is why an infrared remote may work when aimed at a wall yet fail from another room.'
    },
    {
      type: 'paragraph',
      text: 'RF uses radio waves. A path through a non-metal partition may be usable, but metal, reinforced concrete and antenna placement can still reduce received power enough to prevent decoding.'
    },
    {
      type: 'paragraph',
      text: 'Frequency choice depends on the country and application. The EU SRD decision includes conditional 433 MHz entries; US control transmitters can operate under rules such as 47 CFR §15.231. Neither 315 MHz nor 433 MHz is a worldwide permission to transmit at any power.',
      links: [
        {
          text: 'EU SRD decision',
          href: 'https://eur-lex.europa.eu/eli/dec_impl/2025/105/oj/eng'
        },
        {
          text: '47 CFR §15.231',
          href: 'https://www.govinfo.gov/content/pkg/CFR-2024-title47-vol1/pdf/CFR-2024-title47-vol1-sec15-231.pdf'
        }
      ]
    },
    {
      type: 'heading',
      text: 'The Radio Link Needs a Decoder',
      id: 'three-components-one-working-system'
    },
    {
      type: 'paragraph',
      text: 'Separate three jobs: transmit a coded command, receive and validate it, then switch the load. Some boards combine several jobs; a bare radio receiver usually does not.'
    },
    {
      type: 'list',
      items: [
        'Transmitter: a finished remote with a documented code format, or a radio driven by an encoder or microcontroller.',
        'Receiver and decoder: a matched board that identifies the command and produces a defined output. A raw DATA output carries received bit timing, not a ready-to-use switch signal.',
        'Load interface: a relay module or electronic switch whose input is compatible with the decoded output. It needs its own correctly rated supply.'
      ]
    },
    {
      type: 'paragraph',
      text: 'The intended chain is button → encoded RF command → receiver → valid decoded command → load driver. Matching only the printed frequency leaves the decoding step unresolved.'
    },
    {
      type: 'callout',
      title: 'Keep the first load low voltage',
      text: 'Use a current-limited low-voltage supply and a small load within its rating. This guide does not cover mains wiring, gate motors or safety-critical motion control.'
    },
    {
      type: 'heading',
      text: 'Choose the Parts as a Set',
      id: 'parts-list'
    },
    {
      type: 'paragraph',
      text: 'Buy the radio pair with its pinout and operating instructions. Confirm whether the receiver already includes a decoder and relay before ordering another board.'
    },
    {
      type: 'list',
      items: [
        'A handheld transmitter and receiver documented to use the same frequency, modulation and code format.',
        'A decoded receiver output, or the correct decoder/microcontroller if the receiver supplies raw data.',
        'A relay module with an onboard driver, if the receiver does not already include the load switch.',
        'Receiver and relay supplies at their specified voltages, with enough current for the relay coil.',
        'The transmitter battery type specified by its manufacturer.',
        'A small low-voltage lamp or buzzer and suitably rated wiring.',
        'A nonconductive enclosure with room for the prescribed antenna.',
        'A multimeter and the board documentation; an oscilloscope helps if a pulse output is too brief to measure.'
      ]
    },
    {
      type: 'paragraph',
      text: 'Two 433.92 MHz boards can still be incompatible. They may use different modulation, pulse timing, addresses or rolling-code formats. A transmitter and receiver sold as a documented pair reduce this uncertainty.'
    },
    {
      type: 'heading',
      text: 'Check the Transmitter Interface',
      id: 'wiring-the-transmitter'
    },
    {
      type: 'paragraph',
      text: 'A finished handheld remote already contains the button, coding circuit and radio. Check its battery polarity and pairing procedure. A bare transmitter with VCC, GND and DATA needs an external source of correctly timed data.'
    },
    {
      type: 'paragraph',
      text: 'Use the module’s recommended supply range, not its absolute maximum rating. Check DATA-pin voltage limits as well: a board powered at 3.3 V may not accept a 5 V control signal.'
    },
    {
      type: 'paragraph',
      text: 'Holding a bare transmitter DATA pin high may produce a carrier, but it does not create an addressed button command. Follow the encoder or microcontroller design for that particular receiver.'
    },
    {
      type: 'heading',
      text: 'Connect the Decoded Output to the Load Driver',
      id: 'wiring-the-receiver-and-relay'
    },
    {
      type: 'paragraph',
      text: 'Find the receiver’s decoded channel output and its active level. Check output voltage, source/sink current and the relay module’s input requirements before connecting them. Do not connect raw RF DATA to relay IN.'
    },
    {
      type: 'paragraph',
      text: 'A relay coil must use a suitable driver and inductive suppression; a receiver GPIO should not power it directly. If the relay board has a driver, follow its supply and ground instructions. Some isolated boards have separate coil and logic supplies.'
    },
    {
      type: 'paragraph',
      text: 'For a normally off DC lamp, the contact circuit can be load-supply positive → COM → NO → lamp → load-supply negative. Confirm the lamp voltage and relay’s DC contact rating. The radio’s logic supply need not be the lamp supply.'
    },
    {
      type: 'paragraph',
      text: 'Keep this circuit at low voltage. Relay contact markings alone do not establish that a board, enclosure or wiring arrangement is suitable for mains. Turn power off before changing connections.'
    },
    {
      type: 'heading',
      text: 'Test One Stage at a Time',
      id: 'testing-and-troubleshooting'
    },
    {
      type: 'paragraph',
      text: 'Check the decoded output before connecting the load. Then verify the relay input, contact closure and lamp separately. A relay click confirms coil motion; it does not prove the load has power.'
    },
    {
      type: 'list',
      items: [
        'Compatibility: use the documented radio pair and complete its pairing procedure.',
        'Supply: measure voltage at the receiver and relay pins, including when the coil energizes.',
        'Output: confirm momentary, toggle or latch behavior. These are different functions even when boards look identical.',
        'Control interface: verify the active level and current rating; add the prescribed driver or level interface if required.',
        'Contacts: check COM/NO continuity with power removed from the load circuit.',
        'Antenna: install the specified antenna outside metal shielding and test with the final enclosure.'
      ]
    },
    {
      type: 'paragraph',
      text: 'At 433.92 MHz, c/(4f) is about 17.3 cm. This is the free-space starting length for a quarter-wave wire monopole, not a rule for every antenna. Ground size, enclosure and matching matter; do not straighten a deliberately designed helical antenna.',
      links: [
        {
          text: 'quarter-wave wire monopole',
          href: 'https://www.ti.com/lit/an/swra161b/swra161b.pdf'
        }
      ]
    },
    {
      type: 'heading',
      text: 'Add Functions After the Basic Link Works',
      id: 'going-further'
    },
    {
      type: 'paragraph',
      text: 'Multi-channel control needs separate decoded channels and a receiver mode suited to each load. Decide whether each button should hold, toggle or select an output before choosing the board.',
      links: [
        {
          text: 'receiver mode',
          href: 'https://www.adafruit.com/product/1096'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'A microcontroller can add a timeout, reject repeated commands or report status. Its inputs must still tolerate the receiver output voltage, and reset should leave the load in the intended state.'
    },
    {
      type: 'paragraph',
      text: 'Simple fixed-code demonstration modules are not a basis for secure access control. A stored code can be replayed if the receiver accepts the same command again.'
    },
    {
      type: 'paragraph',
      text: 'For a door or lock, use a complete, documented access-control system with appropriate authentication and safety functions. A rolling-code encoder name alone does not establish that the receiver, key provisioning or actuator is secure.'
    },
    {
      type: 'heading',
      text: 'Checks Before Enclosing the Project',
      id: 'safety-notes-worth-reading'
    },
    {
      type: 'list',
      items: [
        'Use equipment permitted for the intended country and application.',
        'Stay within the recommended supply, pin and contact ratings.',
        'Keep the first load low voltage and disconnect power before rewiring.',
        'Check output behavior after receiver power-up, loss of signal and a long button press.',
        'Follow the antenna instructions and repeat the test after closing the enclosure.',
        'Keep the demonstration separate from locks, gate operators and other safety-critical loads.'
      ]
    },
    {
      type: 'heading',
      text: 'Record What You Built',
      id: 'the-bigger-picture'
    },
    {
      type: 'paragraph',
      text: 'Write down the exact board models, pin connections, supply voltages and receiver mode. This makes a later fault traceable instead of relying on the appearance of the modules.'
    },
    {
      type: 'paragraph',
      text: 'For each button press, observe the decoded output, relay contact and load response. If one stage fails, investigate that stage before changing the radio.'
    },
    {
      type: 'paragraph',
      text: 'A successful bench test establishes the basic control chain. Range and reliability still need testing at the intended locations with the final antenna, enclosure and power supply.'
    },
    {
      type: 'quote',
      text: 'A usable RF command needs both a compatible decoder and a correctly rated load interface.'
    },
  ],
  'third-party-rf-remote-brand-receiver-pairing': [
    {
      type: 'paragraph',
      text: 'A replacement remote can have the right frequency and still fail to register. Before ordering another one, identify the receiver model, the original transmitter model and the programming procedure for that pair.'
    },
    {
      type: 'paragraph',
      text: 'There are two different problems to separate: the receiver never accepts the new remote, or it accepts it but operation is unreliable at the required distance. They need different checks.'
    },
    {
      type: 'paragraph',
      text: 'A radio link must deliver a readable message, and the receiver must recognize that message as an authorized command. Frequency, modulation, frame format and registration rules all contribute. A brand name on a listing does not specify them.'
    },
    {
      type: 'image',
      src: illustratedBlogPhotos['third-party-rf-remote-brand-receiver-pairing'].image,
      srcSet: illustratedBlogPhotos['third-party-rf-remote-brand-receiver-pairing'].imageSrcSet,
      alt: 'Illustration: Remote housings and a separate receiver board prepared for identification',
      caption: 'Illustration of the article topic.'
    },
    {
      type: 'heading',
      text: 'Layer 1: Frequency and Product Variant',
      id: 'layer-1-frequency'
    },
    {
      type: 'paragraph',
      text: 'Use the receiver label and model-specific documentation as the starting point. Similar product names can refer to different regional or radio variants.'
    },
    {
      type: 'paragraph',
      text: 'Nice\'s OXI/OX2 manual, for example, lists 433.92 MHz and 868.46 MHz variants and states that these frequencies are incompatible. The exact suffix matters. This is more useful than a general claim that a remote works with Nice.',
      links: [
        {
          text: 'OXI/OX2 manual',
          href: 'https://www.niceforyou.com/sites/default/files/upload/manuals/IST228R02.4851.pdf'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'A transmitter limited to one of those frequencies cannot communicate with a receiver limited to the other. A multi-frequency replacement still needs explicit support for the receiver\'s protocol on the relevant band.'
    },
    {
      type: 'list',
      items: [
        'Record the full receiver and transmitter model numbers, including suffixes.',
        'Check the frequency in their manuals or product labels.',
        'Ask which specific replacement revision was tested with that receiver.',
        'For uncertain hardware, have the transmitter frequency measured instead of guessing from the shell.'
      ]
    },
    {
      type: 'heading',
      text: 'Layer 2: Modulation and Message Timing',
      id: 'layer-2-modulation-and-bit-timing'
    },
    {
      type: 'paragraph',
      text: 'Frequency identifies where the signal sits in the spectrum. It does not specify how the command is represented.'
    },
    {
      type: 'paragraph',
      text: 'ASK/OOK changes signal amplitude; FSK changes frequency. Those terms describe modulation, not a security grade. A receiver must support the transmitted method.'
    },
    {
      type: 'paragraph',
      text: 'The receiver\'s decoder also needs the expected pulse timing and frame structure. Matching the carrier while using an unsupported data format can leave the receiver with no valid command to register.'
    },
    {
      type: 'paragraph',
      text: 'Microchip\'s AN661 decoder note illustrates this distinction: it describes a particular preamble, header and pulse format before checking the transmitter\'s credentials. That format is an example, not a common format shared by every gate remote.',
      links: [
        {
          text: 'AN661 decoder note',
          href: 'https://ww1.microchip.com/downloads/en/Appnotes/00661C.pdf'
        }
      ]
    },
    {
      type: 'heading',
      text: 'Layer 3: Code Family and Enrollment',
      id: 'layer-3-rolling-code'
    },
    {
      type: 'paragraph',
      text: 'A receiver that supports rolling code needs more than a recording of one transmission. It needs a supported transmitter and the correct enrollment process.'
    },
    {
      type: 'paragraph',
      text: 'In a static-code system, the identifying code does not advance between uses. Some copy remotes support selected static formats. Support for one format does not mean that every fixed-code remote can be copied.'
    },
    {
      type: 'paragraph',
      text: 'For HCS301-based systems, the chip\'s programmed keys and configuration are part of compatibility. Microchip\'s datasheet describes parameters set during production. Two transmitters carrying the same chip marking can therefore belong to different systems.',
      links: [
        {
          text: 'Microchip\'s datasheet',
          href: 'https://ww1.microchip.com/downloads/aemDocuments/documents/MCU08/ProductDocuments/DataSheets/21143C.pdf'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'A learning indicator on a copy remote shows only that its own learning routine completed. It does not show that the installed receiver accepted a new transmitter.'
    },
    {
      type: 'callout',
      title: 'Check what learning means',
      text: 'Receiver enrollment stores a supported transmitter\'s credentials. Signal learning stores or reproduces a supported message format. Ask the supplier which operation the replacement requires.'
    },
    {
      type: 'heading',
      text: 'Layer 4: Performance after Registration',
      id: 'layer-4-hardware-sensitivity-and-antenna-matching'
    },
    {
      type: 'paragraph',
      text: 'Once the receiver confirms registration, test the required buttons and distance. If registration succeeds nearby but control is unreliable farther away, investigate the radio link.'
    },
    {
      type: 'paragraph',
      text: 'Battery condition, antenna efficiency, receiver placement and local noise affect link margin. These can reduce operating distance without changing which protocol the receiver supports.'
    },
    {
      type: 'paragraph',
      text: 'Compare the original and replacement at the same positions, with the same receiver and known-good batteries. Repeat presses and record responses so the supplier can reproduce a range complaint.'
    },
    {
      type: 'paragraph',
      text: 'An antenna can perform differently inside a case or near a hand. TI\'s antenna matching guide demonstrates both effects. Test the assembled remote in normal use rather than assuming a bare-board RF result represents the finished product.',
      links: [
        {
          text: 'antenna matching guide',
          href: 'https://www.ti.com/lit/pdf/swra726'
        }
      ]
    },
    {
      type: 'list',
      items: [
        'Verify each assigned button at a short distance before a range check.',
        'Repeat the check at the intended operating locations and orientations.',
        'Follow the receiver manual for antenna placement and keep the installation unchanged during comparison.',
        'Record successes, failures and battery condition for both remotes.'
      ]
    },
    {
      type: 'heading',
      text: 'Layer 5: Receiver Settings and Access Permission',
      id: 'layer-5-firmware-locks-and-authorization'
    },
    {
      type: 'paragraph',
      text: 'A supported remote can still fail enrollment if receiver memory is full, programming is restricted or the wrong enrollment method is used.'
    },
    {
      type: 'paragraph',
      text: 'The Nice OX2 instructions say that transmitters stored in one receiver must belong to the same encoding family. A list of families supported by the hardware is therefore not permission to mix all of them in an existing installation.',
      links: [
        {
          text: 'Nice OX2 instructions',
          href: 'https://www.niceforyou.com/en/professional-area/videos-faq/control-systems/ox2'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'Even the location of the programming control is model-specific. LiftMaster\'s instructions for model 8500 put remote enrollment on the 888LM or 889LM control panel; the learn button on the opener serves a different purpose. Follow the correct model instructions.',
      links: [
        {
          text: 'instructions for model 8500',
          href: 'https://support.chamberlaingroup.com/s/article/8500-Remote-control-or-keyless-entry-will-not-program-1484145694289'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'For a managed property, have the administrator confirm enrollment permissions and available memory. Do not infer that a failed pairing proves a firmware lock, cloud requirement or unsupported encryption scheme.'
    },
    {
      type: 'heading',
      text: 'Layer 6: Installation and Interference',
      id: 'layer-6-environment'
    },
    {
      type: 'paragraph',
      text: 'Intermittent control at one site needs an installation comparison before a compatibility verdict.'
    },
    {
      type: 'paragraph',
      text: 'Start with battery contacts and the receiver antenna arrangement. Check whether both the original and replacement fail at the same locations or times. A symptom shared by both points toward the installation or surroundings.'
    },
    {
      type: 'paragraph',
      text: 'Nearby radio traffic or electrical equipment can make a weak link unreliable. A stronger nearby test does not rule that out, and an interference observation does not identify a faulty component.'
    },
    {
      type: 'paragraph',
      text: 'If the simple comparison does not resolve it, an RF technician can measure the signal and local noise. Keep receiver settings and test locations fixed so the results remain comparable.'
    },
    {
      type: 'heading',
      text: 'Choose a Replacement from Evidence',
      id: 'what-actually-works'
    },
    {
      type: 'paragraph',
      text: 'Start with a model-specific compatibility table and enrollment instructions. LiftMaster\'s receiver compatibility guide uses the receiver model number to select remotes. Apply that same standard to a third-party offer: ask for the exact pair that was validated.',
      links: [
        {
          text: 'receiver compatibility guide',
          href: 'https://support.chamberlaingroup.com/s/article/LiftMaster-receiver-and-remote-compatibility-1484145638635'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'For a third-party sample, confirm every needed function, enrollment and repeated operation on your authorized receiver. A successful test establishes that tested configuration; it does not establish support for every product carrying the brand.'
    },
    {
      type: 'paragraph',
      text: 'If supported replacements are unavailable, ask the installer whether an external receiver is suitable. Confirm the operator\'s control input, supply requirements and safety behavior from its manual before selecting or connecting one.'
    },
    {
      type: 'paragraph',
      text: 'For shared access, assess how a lost remote is removed and whether its identity can be revoked individually. Some deletion methods require the remote itself; that distinction matters when it has been lost.'
    },
    {
      type: 'heading',
      text: 'Keep the Result Traceable',
      id: 'the-core-takeaway'
    },
    {
      type: 'paragraph',
      text: 'A useful compatibility record names the receiver, transmitter, revisions, enrollment method and functions tested. Add the operating locations and battery condition if range is part of the requirement.'
    },
    {
      type: 'paragraph',
      text: 'If enrollment never succeeds, focus on supported models, code family and programming state. If enrollment succeeds but operation is intermittent, compare the link and installation conditions.'
    },
    {
      type: 'quote',
      text: 'Approve the remote for the receiver and conditions you tested, and require revalidation when a relevant product revision changes.'
    },
  ],
  'wifi-switch-protocols-smart-home-guide': [
    {
      type: 'paragraph',
      text: 'Two switches can both offer app control and still need different equipment in the home. One joins a Wi-Fi access point; another joins a Zigbee coordinator; a Matter-over-Thread model needs a compatible Matter controller and a Thread border router for access from the home network.'
    },
    {
      type: 'paragraph',
      text: 'The names on the box describe different layers. Wi-Fi and Thread provide networking, Matter defines how compatible devices communicate at the application level, and Tuya supplies a product and service platform. Treating them as interchangeable choices makes comparisons harder.'
    },
    {
      type: 'paragraph',
      text: 'Start with the required functions: wall-button operation, local phone control, schedules, voice control and access from outside the home. Then identify which device or service runs each function.'
    },
    {
      type: 'image',
      src: illustratedBlogPhotos['wifi-switch-protocols-smart-home-guide'].image,
      srcSet: illustratedBlogPhotos['wifi-switch-protocols-smart-home-guide'].imageSrcSet,
      alt: 'Illustration: A wall switch and an unbranded wireless router in an ordinary living room',
      caption: 'A switch and router illustrate separate parts of a home control system.'
    },
    {
      type: 'heading',
      text: 'Wi-Fi: Direct Network Access, Different Control Paths',
      id: 'wi-fi-the-path-of-least-resistance'
    },
    {
      type: 'paragraph',
      text: 'A Wi-Fi switch usually joins the home access point without a separate radio gateway. That does not necessarily remove the need for a smart-home controller, an account or a vendor service. Those requirements depend on its application software.'
    },
    {
      type: 'paragraph',
      text: 'Check the supported Wi-Fi band before buying. A 2.4 GHz-only switch cannot join a 5 GHz-only network. Setup can also fail because of unsupported authentication, network isolation or commissioning requirements, even when the signal is strong.'
    },
    {
      type: 'paragraph',
      text: 'There is no universal device count at which Wi-Fi switches become unreliable. Coverage, airtime, reconnect behavior and access-point capacity all matter. Tiny command packets do not prove that a poorly planned network will cope with a large installation.'
    },
    {
      type: 'paragraph',
      text: 'Separate internet loss from Wi-Fi loss. A local API or Matter controller may keep working with the internet disconnected while the local network stays up. A cloud-only app path may fail. The wall button can remain usable in either case if the product implements it locally.'
    },
    {
      type: 'heading',
      text: 'Zigbee: Plan the Coordinator and Router Devices',
      id: 'zigbee-built-for-scale'
    },
    {
      type: 'paragraph',
      text: 'Zigbee is a low-power wireless stack commonly used for switches, lights and sensors. Many home products use 2.4 GHz, so moving from Wi-Fi to Zigbee does not automatically escape interference in that band.'
    },
    {
      type: 'paragraph',
      text: 'Only router devices relay messages; end devices do not. A powered switch may be a router, but its role must be confirmed from the product documentation. Adding battery remotes increases device count without necessarily extending coverage.',
      links: [
        {
          text: 'Only router devices relay messages; end devices do not.',
          href: 'https://docs.silabs.com/zigbee/latest/zigbee-concepts/node-types-pan-ids'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'A Zigbee network has a coordinator. Phone and ecosystem integration usually comes through a compatible gateway, which may also run automations. Local behavior depends on that gateway and on any direct device bindings. Check the exact switch functions the gateway exposes.'
    },
    {
      type: 'heading',
      text: 'Z-Wave: Match the Regional Version',
      id: 'z-wave-reliable-but-regional'
    },
    {
      type: 'paragraph',
      text: 'Z-Wave uses regional sub-GHz frequency plans. A switch and controller must use compatible regional versions, and the product must meet the destination market\'s radio rules. The brand name alone does not establish compatibility.',
      links: [
        {
          text: 'regional sub-GHz frequency plans',
          href: 'https://www.silabs.com/wireless/z-wave/global-regions'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'Conventional Z-Wave uses mesh routing; Z-Wave Long Range uses a star topology with direct controller-to-device communication. Support for one mode does not prove support for the other. Check both the endpoint and controller.'
    },
    {
      type: 'paragraph',
      text: 'Operating outside 2.4 GHz avoids that specific band, but does not make a link immune to interference, metal enclosures or poor antenna placement. For a retrofit, compare the available switch types and the supported controller functions before choosing the radio.'
    },
    {
      type: 'heading',
      text: 'Matter: An Application Standard over IP',
      id: 'matter-the-attempt-to-reduce-ecosystem-lock-in'
    },
    {
      type: 'paragraph',
      text: 'Matter defines interoperable device behavior over IP networks. It operates over Wi-Fi, Thread or Ethernet; Bluetooth Low Energy is used for commissioning. A label such as Matter over Wi-Fi tells you more than Matter alone.',
      links: [
        {
          text: 'Matter',
          href: 'https://csa-iot.org/developer-resource/matter-developer/'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'A Matter controller manages devices and sends commands. Matter supports local communication, but remote access and some voice or automation services still depend on the selected ecosystem. Also check whether functions beyond basic on/off control appear in each platform.'
    },
    {
      type: 'paragraph',
      text: 'Zigbee devices do not become native Matter devices because the two technologies share some radio foundations. A compatible Matter bridge can expose supported Zigbee functions. A Thread border router performs a different networking task and cannot replace that bridge.',
      links: [
        {
          text: 'A compatible Matter bridge',
          href: 'https://csa-iot.org/all-solutions/matter/matter-faq/'
        }
      ]
    },
    {
      type: 'heading',
      text: 'Tuya: Check the Product and Gateway Combination',
      id: 'tuya-a-platform-not-a-protocol'
    },
    {
      type: 'paragraph',
      text: 'Tuya is a development and service platform used with several radio technologies. A Tuya Wi-Fi switch and a Tuya Zigbee switch can have different setup, gateway and offline requirements despite using the same app.'
    },
    {
      type: 'paragraph',
      text: 'Ask which module, firmware, app integration and gateway the proposed product uses. An app logo does not establish support for local scenes, Matter, energy reporting or every feature shown in another product\'s listing.'
    },
    {
      type: 'paragraph',
      text: 'Tuya\'s local linkage runs supported automation on a gateway, with the participating devices connected to that gateway. For offline operation, the rule must have been sent to the gateway before internet access is lost and remain available there. Cloud-executed rules still need cloud access. Check the proposed trigger, action and gateway support instead of promising that every Tuya product or scene works offline.',
      links: [
        {
          text: 'local linkage',
          href: 'https://developer.tuya.com/en/docs/iot-device-dev/tuyaos-gateway-local-linkage?id=Kc5xcmw9dasl6'
        }
      ]
    },
    {
      type: 'heading',
      text: 'Thread: IP Mesh Networking, with a Border Router',
      id: 'thread-the-infrastructure-layer-worth-knowing'
    },
    {
      type: 'paragraph',
      text: 'Thread is an IPv6 mesh networking technology using IEEE 802.15.4 radios. It supplies the network layer; Matter is one application that can run over it. Thread capability alone does not identify the application protocol a product implements.'
    },
    {
      type: 'paragraph',
      text: 'A Thread border router forwards IP traffic between the Thread network and other IP networks such as Wi-Fi or Ethernet. It does not translate application commands as a Zigbee-to-Matter bridge does.',
      links: [
        {
          text: 'Thread border router',
          href: 'https://threadgroup.org/Newsroom/Blog/what-is-a-thread-border-router-and-how-is-it-different-from-a-hub-or-a-bridge'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'In a Matter installation, the controller and border-router functions may live in the same physical hub or speaker, but they remain different functions. Confirm that both are available, configured for the installation and supported by the chosen platform.'
    },
    {
      type: 'heading',
      text: 'Bluetooth: Distinguish Setup, Direct Control and Mesh',
      id: 'bluetooth-short-range-specific-uses'
    },
    {
      type: 'paragraph',
      text: 'Bluetooth Low Energy can be used to commission a switch or control it directly from a nearby phone. Seeing Bluetooth on a specification does not establish that the phone can operate the load after setup.'
    },
    {
      type: 'paragraph',
      text: 'Bluetooth Mesh is a separate many-to-many networking architecture used in lighting and building automation. It should not be confused with an ordinary phone-to-device connection or Matter\'s Bluetooth commissioning step.',
      links: [
        {
          text: 'Bluetooth Mesh',
          href: 'https://www.bluetooth.com/learn-about-bluetooth/topology-options/'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'Range depends on transmit power, receiver sensitivity, antenna design, building materials and network topology. Avoid a blanket room-scale limit. For a mesh product, ask about relay nodes, supported lighting models and the commissioning tool.'
    },
    {
      type: 'heading',
      text: 'Choose around the Required Control Paths',
      id: 'how-to-actually-choose'
    },
    {
      type: 'paragraph',
      text: 'Compare complete systems rather than ranking protocol names. The better choice is the one whose wiring, controller, service dependencies and maintenance requirements fit the property.'
    },
    {
      type: 'list',
      items: [
        'Wi-Fi: useful when direct access-point connection suits the installation; confirm the band, local control interface and behavior without internet.',
        'Zigbee: useful with a supported coordinator and planned router coverage; verify the switch\'s functions and device role.',
        'Z-Wave: confirm regional versions, controller support and whether the project uses mesh or Long Range.',
        'Matter: verify the certified product, supported device features and the intended ecosystems; identify its actual network technology.',
        'Tuya: define the module, gateway and scenes, then distinguish local execution from cloud execution.',
        'Bluetooth: identify whether it is only for setup, for direct control or for a compatible mesh system.'
      ]
    },
    {
      type: 'heading',
      text: 'Buyer Checklist',
      id: 'buyer-checklist'
    },
    {
      type: 'list',
      items: [
        'Does the existing wiring provide the neutral, box space and load arrangement this switch requires?',
        'Which functions must survive internet loss, access-point failure and controller failure?',
        'What is the network technology, and which controller, coordinator, bridge or border router is required?',
        'Are dimming, energy measurement and other required functions available in the target platform?',
        'Who supplies firmware updates, and how are a factory reset and ownership transfer handled?',
        'Has a sample been checked with the actual router, loads and installation materials?'
      ]
    },
    {
      type: 'heading',
      text: 'Verify the Sample as a Complete System',
      id: 'the-bottom-line'
    },
    {
      type: 'paragraph',
      text: 'Before placing a volume order, use a sample with the intended controller and load. Record setup, command response and recovery after a power cycle. Disconnect the internet, then the access point or gateway separately; note which functions still operate.'
    },
    {
      type: 'paragraph',
      text: 'Keep the results tied to the model and firmware tested. A different platform module or gateway can change behavior even when the enclosure and sales description are unchanged.'
    },
    {
      type: 'quote',
      text: 'Specify which functions must keep working, then identify every dependency in their control path.'
    },
  ],
  'rf-remote-range-real-world-test-data': [
    {
      type: 'paragraph',
      text: 'A remote that works across an open car park may miss commands from inside a vehicle at the gate. Before ordering, define where the user must be able to operate it and which receiver will be installed.'
    },
    {
      type: 'paragraph',
      text: 'A stated range applies to a particular transmitter, receiver, antennas and test environment. Without those details, two distance ratings cannot be compared fairly.'
    },
    {
      type: 'paragraph',
      text: 'Received power and decoding margin change with the path. Metal, obstructions, reflections and local interference can make a short path harder than a longer unobstructed one.'
    },
    {
      type: 'paragraph',
      text: 'This article provides a test method, not measured range data for a product. The useful result is a record of command success at the locations your installation needs.'
    },
    {
      type: 'image',
      src: illustratedBlogPhotos['rf-remote-range-real-world-test-data'].image,
      srcSet: illustratedBlogPhotos['rf-remote-range-real-world-test-data'].imageSrcSet,
      alt: 'Illustration: A sliding gate and the driveway leading to it',
      caption: 'Illustration of the article topic.'
    },
    {
      type: 'heading',
      text: 'Make the Range Claim Testable',
      id: 'what-the-range-numbers-actually-mean'
    },
    {
      type: 'paragraph',
      text: 'Ask for the receiver model, antenna arrangement, transmitter battery, test location and success criterion behind the stated distance. Check whether the result was measured with the production enclosure.'
    },
    {
      type: 'paragraph',
      text: 'Do not assume a rating means clear line of sight unless the supplier says so. An open-field result and a result through a garage door describe different paths.'
    },
    {
      type: 'paragraph',
      text: 'Choose required operating points before testing: for example, the normal approach, the parking position and the place where a user stands to exit. Measure those distances and keep the hardware position fixed.'
    },
    {
      type: 'paragraph',
      text: 'Distinguish attenuation from interference. A wall or body can reduce the desired signal; a noisy supply or another radio may impair reception by adding noise or overloading the receiver.'
    },
    {
      type: 'list',
      items: [
        'Open path: note distance, antenna height, orientation and whether vehicles or people enter the path.',
        'Obstructed path: note the wall, floor or door crossed and its open/closed state.',
        'Normal use: hold the remote as intended, including inside the vehicle if that is a requirement.',
        'Repeated commands: count attempts, successful responses and response time at each location.'
      ]
    },
    {
      type: 'paragraph',
      text: 'Also record hardware revisions, battery type and measured transmit supply voltage, receiver supply, date and equipment operating nearby. Keep a raw attempt count; a rounded success percentage hides the sample size.'
    },
    {
      type: 'callout',
      title: 'Agree acceptance before comparing samples',
      text: 'Specify required locations, response time, command-success target and number of attempts. A single successful press at the farthest point is not a reliability result.'
    },
    {
      type: 'heading',
      text: 'What Changes the Link Margin',
      id: 'the-six-things-that-actually-determine-range'
    },
    {
      type: 'paragraph',
      text: 'A link budget accounts for transmit power, antenna gains and losses, path loss and the receive threshold. A site test adds what the simplified budget cannot describe reliably: reflections, obstructions and changing interference.'
    },
    {
      type: 'paragraph',
      text: 'For equal isotropic antenna gains and transmitted power, free-space loss is lower at a lower frequency. That model does not establish which finished remote works better through a building: antenna efficiency, permitted emissions and the path can outweigh the frequency difference.',
      links: [
        {
          text: 'free-space loss',
          href: 'https://www.itu.int/dms_pubrec/itu-r/rec/p/R-REC-P.525-5-202411-I!!PDF-E.pdf'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'Compare modulation together with data rate, occupied bandwidth and receiver settings. FSK, OOK and spread-spectrum links make different tradeoffs; a modulation label alone does not rank their installed range.'
    },
    {
      type: 'paragraph',
      text: 'In the ITU free-space model, another 6 dB of link budget permits about twice the distance when other terms are fixed. Real ground-level installations have reflections and obstructions, so this is a model, not an upgrade promise.',
      links: [
        {
          text: 'ITU free-space model',
          href: 'https://www.itu.int/dms_pubrec/itu-r/rec/p/R-REC-P.525-5-202411-I!!PDF-E.pdf'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'Antenna placement changes both radiation and reception. A wire monopole needs an appropriate ground reference; a compact or helical antenna can be valid when designed and matched for the enclosure.'
    },
    {
      type: 'paragraph',
      text: 'A lower sensitivity threshold helps only under comparable test conditions. A -110 dBm specification at a slow data rate is not directly comparable with -95 dBm at a faster rate or a different error target.',
      links: [
        {
          text: 'comparable test conditions',
          href: 'https://www.ti.com/lit/ds/symlink/cc1101.pdf'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'There is no reliable wall-loss number to use for every site. Material, thickness, moisture, reinforcing metal, path angle and openings all affect the result.'
    },
    {
      type: 'paragraph',
      text: 'Interference can corrupt frames or desensitize the receiver. A strong signal outside the receive channel can also cause trouble if the receiver lacks sufficient blocking performance.',
      links: [
        {
          text: 'blocking performance',
          href: 'https://www.ti.com/lit/ds/symlink/cc1101.pdf'
        }
      ]
    },
    {
      type: 'heading',
      text: 'Four Checks Before Changing Hardware',
      id: 'four-step-diagnosis-before-replacing-hardware'
    },
    {
      type: 'paragraph',
      text: 'Change one variable at a time and repeat the same command sequence. Start with the two easiest substitutions: a known-good remote and the correct fresh battery.'
    },
    {
      type: 'list',
      items: [
        'Battery: use the specified chemistry and size, inspect contacts, and measure voltage during transmission. An LED is not an RF output test.',
        'Antenna: follow the receiver’s installation instructions. Move a permitted external antenna clear of metal; do not reshape a tuned antenna by guesswork.',
        'Interference: with permission to operate the equipment, switch suspect supplies or lighting off one at a time and repeat the same test. A 2.4 GHz router is not automatically a 433 MHz interferer.',
        'RF check: use a calibrated spectrum analyzer or suitable receiver to compare spectrum occupancy and transmitter output. An uncalibrated scan does not establish receiver sensitivity or prove compliance.'
      ]
    },
    {
      type: 'paragraph',
      text: 'A repeatable improvement after one change gives a direction for diagnosis. Restore and repeat the original condition where practical to check that the improvement was caused by that change.'
    },
    {
      type: 'heading',
      text: 'Choose a Remedy for the Measured Cause',
      id: 'five-ways-to-review-range-problems'
    },
    {
      type: 'paragraph',
      text: 'If one receiver location fails while another works with the same remote, investigate placement, supply and local interference. If one remote fails with several receivers, investigate that transmitter first.'
    },
    {
      type: 'list',
      items: [
        'Antenna placement: use a supported external antenna and account for feedline loss; test the final mounting position.',
        'Receiver: compare sensitivity, selectivity and blocking under the intended waveform rather than choosing by architecture name alone.',
        'New radio design: evaluate data rate, packet format and modulation together. Replacing ASK with FSK generally requires compatible hardware and firmware at both ends.',
        'Coverage: a documented repeater can relay a compatible protocol, but adds another radio path, latency and installation dependency.',
        'Power or frequency changes: check the target market’s rules and the product’s authorization before modifying hardware; neither is a universal field fix.'
      ]
    },
    {
      type: 'heading',
      text: 'What Buyers Should Ask For',
      id: 'procurement-checklist-for-business-buyers'
    },
    {
      type: 'paragraph',
      text: 'A useful supplier response should identify the tested system and limits. Ask for evidence that matches the variant, receiver and antenna you intend to buy.'
    },
    {
      type: 'list',
      items: [
        'Range: the test method, attempt count, success criterion and receiver/antenna used.',
        'Receiver: sensitivity conditions plus adjacent-channel and blocking behavior where available.',
        'Transmitter: measured output and whether it is conducted power, ERP, EIRP or field strength. These are different quantities.',
        'Antenna: permitted configurations, cable loss and installation restrictions.',
        'Compatibility: supported modulation, protocol, registration method and hardware revisions.',
        'Market evidence: the applicable radio test report or authorization for the actual product variant and destination.'
      ]
    },
    {
      type: 'heading',
      text: 'Questions That Affect the Test',
      id: 'faq'
    },
    {
      type: 'paragraph',
      text: 'Why can range get worse after a battery change? Check battery type, contact pressure and voltage under transmit load. A new cell can still be unsuitable, poorly connected or depleted; resting voltage alone does not resolve this.'
    },
    {
      type: 'paragraph',
      text: 'How should an antenna work with a metal cabinet? Use the manufacturer’s supported external antenna arrangement. Cabinet openings and cables can affect radiation, but an opening of unknown size is not a predictable substitute for testing.'
    },
    {
      type: 'paragraph',
      text: 'Will pressing two remotes together fill a dead zone? No. Overlapping transmissions on the same channel may corrupt commands. Test each remote separately and address the path or receiver placement.'
    },
    {
      type: 'paragraph',
      text: 'Is 433 MHz better than 2.4 GHz? With equal isotropic gains the lower frequency has less free-space loss. Finished-system range still depends on antennas, power limits, sensitivity, bandwidth and the installed path. Bidirectional capability is a protocol/hardware choice, not a property of 2.4 GHz.'
    },
    {
      type: 'paragraph',
      text: 'How many presses are enough? Agree a count and required success rate before testing, then report both. For example, 19 successes in 20 attempts is 95% in that short run; it does not establish a long-term 95% reliability guarantee.'
    },
    {
      type: 'heading',
      text: 'Keep the Test Record with the Purchase Decision',
      id: 'range-is-a-system-result'
    },
    {
      type: 'paragraph',
      text: 'Select the system that meets the required locations with reserve, then repeat the checks under meaningful variations such as enclosure position, battery condition and operating equipment.'
    },
    {
      type: 'paragraph',
      text: 'If two samples differ, keep the receiver, path and procedure constant while substituting one sample at a time. That turns a range complaint into evidence a supplier or installer can act on.'
    },
  ],
  'garage-door-remote-cloning-security-guide': [
    {
      type: 'paragraph',
      text: 'A garage remote is an access credential. To judge its security, identify how the receiver authenticates it and how you can remove it if it is lost.'
    },
    {
      type: 'paragraph',
      text: 'The fact that a remote uses radio does not show how easy it is to duplicate. A frequency label, a learning button or an encrypted claim does not answer that question.'
    },
    {
      type: 'paragraph',
      text: 'Start with the transmitter and receiver model numbers. Then check the manufacturer\'s description of the code system, enrollment and deletion procedures.'
    },
    {
      type: 'paragraph',
      text: 'The main distinction for replay is whether the receiver keeps accepting the same identifying message, or checks that an authenticated message is fresh. That distinction helps with a buying decision, but it is only one part of access control.'
    },
    {
      type: 'image',
      src: illustratedBlogPhotos['garage-door-remote-cloning-security-guide'].image,
      srcSet: illustratedBlogPhotos['garage-door-remote-cloning-security-guide'].imageSrcSet,
      alt: 'Illustration: A sectional garage door with visible side tracks',
      caption: 'Illustration of the article topic.'
    },
    {
      type: 'paragraph',
      text: 'Fixed code and rolling code describe message behavior. Overall security also depends on the receiver\'s implementation, credential management and the physical installation.'
    },
    {
      type: 'heading',
      text: 'Why Repeated Codes Can Be Replayed',
      id: 'why-remotes-can-be-copied-at-all'
    },
    {
      type: 'paragraph',
      text: 'A one-way transmitter sends a command without first asking the receiver for a fresh challenge. The receiver must decide whether the message belongs to an allowed transmitter.'
    },
    {
      type: 'paragraph',
      text: 'Holtek\'s HT12E datasheet provides an example of a static encoder: address and data inputs determine the transmitted message. With the same address and button data, the identifier does not advance between uses. This is a specific circuit example, not a classification of every older remote.',
      links: [
        {
          text: 'HT12E datasheet',
          href: 'https://www.holtek.com/webapi/116711/HT12A_Ev130.pdf'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'If a receiver authenticates only by matching a repeated static code, it cannot distinguish an authorized transmission from a matching replay. That is a limitation of this authentication method.'
    },
    {
      type: 'paragraph',
      text: 'A copy remote still has to support the frequency, modulation and message format. A failed copying attempt therefore does not prove that the installed system resists replay.'
    },
    {
      type: 'callout',
      title: 'What a replay check establishes',
      text: 'Accepting a reproduced static credential is a security limitation. Rejecting one particular copy device is not a security certification.'
    },
    {
      type: 'heading',
      text: 'What Rolling Code Checks',
      id: 'what-rolling-code-actually-does'
    },
    {
      type: 'paragraph',
      text: 'In a rolling-code system, authentication includes a value that advances as the transmitter is used. The receiver tracks valid state instead of treating one recorded message as a permanent credential.'
    },
    {
      type: 'paragraph',
      text: 'The intended protection is rejection of messages the receiver has already accepted. It does not follow that every radio recording is unusable under every possible condition.'
    },
    {
      type: 'paragraph',
      text: 'Microchip\'s HCS301 datasheet describes an encrypted hopping value, a serial number and a synchronization counter. The transmitter\'s keys and configuration must be set correctly, and the receiver must perform the corresponding checks.',
      links: [
        {
          text: 'HCS301 datasheet',
          href: 'https://ww1.microchip.com/downloads/aemDocuments/documents/MCU08/ProductDocuments/DataSheets/21143C.pdf'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'Receivers can allow a forward synchronization window because presses outside radio range still advance the transmitter. Resynchronization rules depend on the implementation; the receiver does not necessarily accept only the immediately next value.'
    },
    {
      type: 'paragraph',
      text: 'Rolling code is not a guarantee against cloning or every attack. Published KeeLoq research demonstrated weaknesses in tested commercial implementations. That finding limits claims of immunity; it is not evidence that every current garage system has the same weakness.',
      links: [
        {
          text: 'Published KeeLoq research',
          href: 'https://research.uni-luebeck.de/en/publications/on-the-power-of-power-analysis-in-the-real-world-a-complete-break/'
        }
      ]
    },
    {
      type: 'heading',
      text: 'Why Security Labels Are Incomplete',
      id: 'the-middle-ground-is-where-buyers-get-confused'
    },
    {
      type: 'paragraph',
      text: 'A label such as anti-copy or rolling code leaves several buying questions unanswered.'
    },
    {
      type: 'paragraph',
      text: 'A changing transmitted value alone does not establish authenticated freshness. Ask how the receiver verifies the transmitter and prevents acceptance of previously used credentials.'
    },
    {
      type: 'paragraph',
      text: 'The supplier should identify the system and supported receiver, rather than promise security from an unverified chip name. Documented implementation and independent evaluation matter when security is a major requirement.'
    },
    {
      type: 'paragraph',
      text: 'For an existing installation, the manufacturer\'s model documentation is the starting point. A chip marking can help identify an encoder, but does not reveal programmed keys or prove how the receiver validates messages.'
    },
    {
      type: 'heading',
      text: 'Identify the Installed System',
      id: 'how-to-check-what-your-remote-uses'
    },
    {
      type: 'paragraph',
      text: 'Record the remote model and the receiver or operator model before opening a working device. Their manuals often provide more useful evidence than an unlabelled PCB.'
    },
    {
      type: 'list',
      items: [
        'Read the model-specific description of authentication and supported transmitters.',
        'Check enrollment restrictions and whether adding a remote needs administrator access.',
        'Check the exact deletion method, especially whether it works without the lost remote.',
        'Use PCB markings only as supporting identification evidence.',
        'Treat undocumented anti-copy claims as unresolved, rather than assuming either safety or compromise.'
      ]
    },
    {
      type: 'paragraph',
      text: 'If a property owner commissions a sample compatibility test, conduct it only on that owner\'s receiver and follow the supported procedure. Confirm that existing authorized remotes continue to work.'
    },
    {
      type: 'paragraph',
      text: 'Do not use a consumer copy-device result as the whole security assessment. Successful operation establishes acceptance of that tested credential; failure can mean incompatible RF or an unsupported learning method.'
    },
    {
      type: 'heading',
      text: 'Choose an Upgrade that Fits the Operator',
      id: 'what-to-do-if-your-remote-is-not-secure'
    },
    {
      type: 'paragraph',
      text: 'Ask the manufacturer or installer which supported security options exist for the receiver model. Find out whether changing transmitters also requires replacing or reconfiguring the receiver.'
    },
    {
      type: 'paragraph',
      text: 'A receiver that supports a rolling-code family needs compatible transmitters from that family and the correct enrollment process. Changing the remote alone cannot add freshness checks to a receiver that does not implement them.'
    },
    {
      type: 'paragraph',
      text: 'An external receiver may be an option for a legacy operator. Its supply, output and operator interface must be compatible, and installation must preserve the operator\'s documented safety functions.'
    },
    {
      type: 'paragraph',
      text: 'Have the installer check the old radio path too. Adding a new receiver does not remove a weakness if the old static-code receiver remains enabled and can still operate the door.'
    },
    {
      type: 'heading',
      text: 'Manage Lost and Shared Credentials',
      id: 'the-layer-above-rf'
    },
    {
      type: 'paragraph',
      text: 'A correctly authenticated command can still come from a stolen remote. Message security does not distinguish the thief holding the remote from its owner.'
    },
    {
      type: 'paragraph',
      text: 'Check how quickly you can revoke a missing credential. A deletion method that needs the original remote may be adequate for returning a working unit, but inadequate for a lost one.'
    },
    {
      type: 'paragraph',
      text: 'App or gateway management may add user records and logs if the specific product supports them. Verify those features and their offline behavior; Wi-Fi or Bluetooth on a specification sheet does not imply remote revocation.'
    },
    {
      type: 'paragraph',
      text: 'For shared garages, ask the supplier to demonstrate the loss-of-remote workflow and explain which credentials remain active afterwards. This is an operational requirement that can be tested before purchase.'
    },
    {
      type: 'heading',
      text: 'Questions to Include in the Order',
      id: 'what-to-buy'
    },
    {
      type: 'list',
      items: [
        'Which transmitter and receiver models form the supported system?',
        'What authentication method is documented, and what replay protection does it provide?',
        'How are new credentials enrolled and programming rights restricted?',
        'Can a lost remote be revoked without possessing it?',
        'What happens to other remotes when one credential is removed?',
        'Which legacy receivers or alternative inputs remain able to operate the door?'
      ]
    },
    {
      type: 'heading',
      text: 'Verify the Removal Procedure',
      id: 'the-bottom-line'
    },
    {
      type: 'paragraph',
      text: 'Do not describe a repeated static identifier as replay-resistant. Its suitability depends on the consequence of unauthorized operation and the other controls protecting the site.'
    },
    {
      type: 'paragraph',
      text: 'Removal features need model-specific review too. Nice\'s OX2 FAQ describes a single-transmitter deletion method that uses the transmitter itself, as well as deletion of all memory. Ask how a missing unit is handled before assuming individual deletion solves loss management.',
      links: [
        {
          text: 'OX2 FAQ',
          href: 'https://www.niceforyou.com/en/professional-area/videos-faq/control-systems/ox2'
        }
      ]
    },
    {
      type: 'quote',
      text: 'Choose a system whose authentication and lost-credential handling meet the access requirements you can describe and test.'
    },
    {
      type: 'paragraph',
      text: 'Keep the model details, enrollment record and removal instructions with the installation documents. They allow the owner or administrator to act when a remote is lost, instead of starting identification again.'
    },
  ],
  'car-key-short-range-window-tint': [
    {
      type: 'quote',
      text: 'A new battery is a starting point for diagnosis, not proof that the key\'s power supply is healthy.'
    },
    {
      type: 'paragraph',
      text: 'If a car key suddenly works only close to the vehicle, begin with what changed: the battery, the key case, the parking location, a vehicle accessory or a glass treatment. These changes suggest checks; none establishes the cause on its own.'
    },
    {
      type: 'paragraph',
      text: 'Measure button-operated locking and unlocking separately from passive entry or push-button starting. Those functions can use different antennas, frequencies and authentication paths. Success with one is not a complete test of the others.'
    },
    {
      type: 'paragraph',
      text: 'The most useful early comparison is with a spare key at the same location. One weak key points toward that key or its battery. Two weak keys justify looking at the vehicle and surroundings as well.'
    },
    {
      type: 'image',
      src: illustratedBlogPhotos['car-key-short-range-window-tint'].image,
      srcSet: illustratedBlogPhotos['car-key-short-range-window-tint'].imageSrcSet,
      alt: 'Illustration: A plain car key beside a tinted car window',
      caption: 'A key and tinted glass illustrate one possible radio signal path.'
    },
    {
      type: 'heading',
      text: 'Start with a Controlled Comparison',
      id: 'the-short-answer-first'
    },
    {
      type: 'paragraph',
      text: 'Use the vehicle\'s manual to establish the expected operation and the correct battery type. Compare the keys with the same command, orientation and approach direction; record successful commands at fixed distances rather than the farthest one-off response.'
    },
    {
      type: 'paragraph',
      text: 'Ford\'s remote-control guidance lists nearby structures, other vehicles and radio transmissions as possible limits on range. That supports checking the surroundings, but it does not identify a fault in any particular car.',
      links: [
        {
          text: 'Ford\'s remote-control guidance',
          href: 'https://www.fordservicecontent.com/Ford_Content/Catalog/owner_information/CG4012en-202402-20241022112547.pdf'
        }
      ]
    },
    {
      type: 'callout',
      title: 'Keep one variable at a time',
      text: 'A change in distance, key orientation, parking position and window state all at once gives a result you cannot interpret.'
    },
    {
      type: 'heading',
      text: 'Check the Battery and Contacts First',
      id: 'do-not-let-a-bad-battery-be-the-weakest-link'
    },
    {
      type: 'paragraph',
      text: 'Confirm the replacement cell\'s part number, polarity and seating. A recently fitted cell can still be old, damaged or poorly connected. A bent holder or a case that no longer closes properly can also interrupt contact.'
    },
    {
      type: 'paragraph',
      text: 'An open-circuit voltage reading does not show the voltage available during a transmission burst. Internal resistance and contact resistance can produce a drop under load. The remote\'s indicator is not a measurement of RF output.'
    },
    {
      type: 'paragraph',
      text: 'Use a fresh cell from a traceable supplier and the type specified by the vehicle manufacturer. If a technician measures the supply during transmission, keep the result tied to that key and test method; do not infer a universal minimum voltage.'
    },
    {
      type: 'list',
      items: [
        'Compare a spare key before taking the original key apart.',
        'Check the exact cell type, polarity, contact seating and case closure against the manual.',
        'Inspect for corrosion, damage or a loose battery holder; use the manufacturer\'s service guidance for repair.',
        'Have a technician check loaded supply voltage and RF output if a correct replacement cell does not restore operation.'
      ]
    },
    {
      type: 'heading',
      text: 'Use Location Changes to Investigate Interference',
      id: 'same-frequency-interference-is-often-overlooked'
    },
    {
      type: 'paragraph',
      text: 'Vehicle radio systems vary by model and market. Button-operated keyless entry often uses sub-GHz frequencies, including 315 MHz or 433.92 MHz in some systems. Identify the actual system instead of selecting a frequency from appearance.'
    },
    {
      type: 'paragraph',
      text: 'Another transmitter or electrical noise source can impair reception. A nearby charger, power adapter or aftermarket accessory is a candidate to investigate, not a confirmed interferer simply because it is present.'
    },
    {
      type: 'paragraph',
      text: 'Move to another parking location and repeat the same key comparison. Improvement suggests an environmental contribution, although vehicle orientation, surrounding metal and reflections may also have changed.'
    },
    {
      type: 'list',
      items: [
        'Repeat the test in the original location and a second location with both keys.',
        'With the vehicle parked, switch off removable aftermarket accessories one at a time and repeat the comparison.',
        'Record whether the fault follows a location, a time of day, an accessory or one particular key.',
        'Do not try to change the key\'s modulation or transmit power as a troubleshooting shortcut.'
      ]
    },
    {
      type: 'heading',
      text: 'Check Authentication Separately from Signal Strength',
      id: 'rolling-code-sync-can-look-like-a-range-problem'
    },
    {
      type: 'paragraph',
      text: 'Many vehicle remotes use changing codes or other authenticated exchanges. The receiver must accept a valid message as well as receive a sufficiently strong signal.'
    },
    {
      type: 'paragraph',
      text: 'Some systems have model-specific synchronization or enrollment procedures. Counter behavior and acceptance windows vary, so repeated presses outside the vehicle\'s range are not enough to diagnose desynchronization.'
    },
    {
      type: 'paragraph',
      text: 'A synchronization fault does not physically shorten the radio link. Repeated presses, intermittent acceptance or failure after a repair may justify checking the documented procedure, but closer operation alone does not prove this fault.'
    },
    {
      type: 'paragraph',
      text: 'Follow the vehicle\'s instructions rather than a generic button sequence. For example, one Ford battery-replacement procedure expressly says reprogramming is unnecessary after replacing the cell; that instruction applies to the listed vehicle configuration.',
      links: [
        {
          text: 'one Ford battery-replacement procedure',
          href: 'https://www.fordservicecontent.com/Ford_Content/vdirsnet/OwnerManual/Home/Content?ProcUid=G1886568&Uid=G1886567&buildtype=web&countryCode=USA&div=f&languageCode=en&userMarket=GBR&vFilteringEnabled=False&variantid=6154'
        }
      ]
    },
    {
      type: 'heading',
      text: 'Treat Window Tint as a Testable Hypothesis',
      id: 'metallic-window-tint-can-block-the-signal'
    },
    {
      type: 'paragraph',
      text: 'Investigate film or coated glass when there is a clear timing link, such as range changing after installation. Tint darkness and heat rejection do not tell you how the assembly behaves at the key\'s operating frequency.'
    },
    {
      type: 'paragraph',
      text: 'Conductive layers can attenuate radio signals. 3M notes that an all-metal film may interfere with electronic or mobile-phone signals. This is evidence for a possible mechanism, not a measured car-key range loss for every tint or vehicle.',
      links: [
        {
          text: 'an all-metal film may interfere',
          href: 'https://www.3m.com/3M/en_US/p/dc/v000580602/'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'The effect depends on film construction, treated area, vehicle receiver location, frequency and the available signal paths through the body and glass. A metal fob cover can also affect the transmitter side; test it separately.'
    },
    {
      type: 'list',
      items: [
        'Remove an aftermarket fob cover and repeat the same test before considering glass changes.',
        'If film was recently installed, ask the installer for its exact product and construction information.',
        'Compare windows open and closed with the key and vehicle held in the same positions, then repeat; a consistent difference is a clue, not proof of film alone.',
        'Do not replace the film on a single test result or assume that every product sold as ceramic has identical RF behavior.'
      ]
    },
    {
      type: 'heading',
      text: 'Review the Receiver Installation',
      id: 'the-receiver-antenna-can-be-buried'
    },
    {
      type: 'paragraph',
      text: 'Original vehicle antennas are part of a model-specific system. If both keys remain weak across locations, a service technician should check that system, its supply and recorded faults rather than treating the key as the only possible cause.'
    },
    {
      type: 'paragraph',
      text: 'Aftermarket receivers need the antenna arrangement specified by their manufacturer. Nearby metal, unintended antenna routing or installation damage can change performance.'
    },
    {
      type: 'paragraph',
      text: 'Moving an antenna wire at random can exchange one problem for another. Keep the specified length and routing; an installer should account for trim, moving parts and vehicle safety equipment.'
    },
    {
      type: 'list',
      items: [
        'Identify whether the receiver is original equipment or an aftermarket alarm or locking module.',
        'Compare the installation with the receiver\'s own antenna and wiring instructions.',
        'Inspect connections and any damage introduced during recent accessory or trim work.',
        'For hardware development, check the antenna in its installed enclosure and confirm RF performance as well as impedance matching.'
      ]
    },
    {
      type: 'heading',
      text: 'Compare Installed Performance, Not an Open-Field Demonstration',
      id: 'certification-and-consistency-matter-more-than-brute-power'
    },
    {
      type: 'paragraph',
      text: 'For a replacement remote or aftermarket receiver, an open-field range figure is useful only with its test conditions. The same hardware can behave differently beside a vehicle, behind conductive glass or among parked cars.'
    },
    {
      type: 'paragraph',
      text: 'A receiver\'s sensitivity, blocking performance and antenna system affect usable range. TI\'s radio-range guide treats these alongside transmitter output and the propagation environment; more output is only one part of the link budget.',
      links: [
        {
          text: 'TI\'s radio-range guide',
          href: 'https://www.ti.com/lit/an/swra479a/swra479a.pdf'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'Increasing transmitter power is not a general repair. A replacement must match the vehicle\'s radio and coding requirements and remain within the destination market\'s rules. Radio conformity paperwork does not demonstrate compatibility with a particular car.'
    },
    {
      type: 'list',
      items: [
        'Confirm the exact vehicle, market, key part number and supported enrollment procedure.',
        'Ask for installed test conditions and sample results rather than an unexplained maximum distance.',
        'For an aftermarket design, record supply, temperature, antenna and receiver configuration during testing.',
        'Keep regulatory evidence separate from the evidence that the replacement works with the intended receiver.'
      ]
    },
    {
      type: 'heading',
      text: 'A Practical Diagnostic Order',
      id: 'quick-diagnostic-checklist'
    },
    {
      type: 'list',
      items: [
        'Battery and key: correct cell, seating, contacts, case and comparison with a spare.',
        'Environment: repeat in another location with the same keys and test method.',
        'Accessories: remove the fob cover and isolate removable vehicle electronics separately.',
        'Glass: investigate the exact film or coating only when the history and repeated comparisons justify it.',
        'Vehicle: check receiver faults and model-specific service information when both keys are affected.',
        'Authentication: follow the documented synchronization or enrollment procedure when the symptoms support it.'
      ]
    },
    {
      type: 'paragraph',
      text: 'Some faults have one clear cause; others involve several losses. Do not assume either pattern before the comparisons are complete.'
    },
    {
      type: 'paragraph',
      text: 'For an unresolved case, record the vehicle and key identifiers, battery used, affected function, test location, command success at fixed distances and recent changes. Photos of an aftermarket receiver installation can help its supplier assess antenna routing.'
    },
    {
      type: 'paragraph',
      text: 'These records let a technician narrow the next step without replacing the key, receiver and window film by guesswork.'
    },
  ],
  'rf-wifi-dual-mode-smart-switch': [
    {
      type: 'paragraph',
      text: 'An RF + Wi-Fi switch can let a handheld remote operate the load while an app provides network control. The useful question is which functions remain available when one path fails.'
    },
    {
      type: 'paragraph',
      text: 'In product descriptions, RF often means a separate sub-GHz remote-control link, commonly 433 MHz in some markets. Wi-Fi is also radio-frequency communication. The label does not identify the local link\'s coding, security or acknowledgment behavior.'
    },
    {
      type: 'paragraph',
      text: 'Some Wi-Fi switches already implement local wall-button control, local APIs or Matter. Adding a second radio is therefore an architectural choice, not evidence that the original Wi-Fi technology cannot work without the cloud.'
    },
    {
      type: 'paragraph',
      text: 'For a sourcing specification, define the required local behavior first. Then establish whether the proposed hardware and firmware actually provide it.'
    },
    {
      type: 'image',
      src: illustratedBlogPhotos['rf-wifi-dual-mode-smart-switch'].image,
      srcSet: illustratedBlogPhotos['rf-wifi-dual-mode-smart-switch'].imageSrcSet,
      alt: 'Illustration: A generic controller board in an open enclosure',
      caption: 'Controller enclosure shown as a design illustration.'
    },
    {
      type: 'heading',
      text: 'Define the Failures the Local Path Must Survive',
      id: 'the-problem-in-a-wi-fi-first-world'
    },
    {
      type: 'paragraph',
      text: 'Internet loss, access-point failure, cloud unavailability and device power loss are different events. An app can lose remote access while the wall button and local network commands still work.'
    },
    {
      type: 'paragraph',
      text: 'Matter, for example, supports local communication; control from outside the home needs an internet-connected controller or another supported remote-access path. A Wi-Fi product\'s offline behavior follows its application architecture.',
      links: [
        {
          text: 'Matter',
          href: 'https://csa-iot.org/all-solutions/matter/matter-faq/'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'A local handheld link is useful when the user needs a physical control away from the installed switch. It can avoid reliance on a phone, but still relies on the receiver, power supply, command decoder and load controller.'
    },
    {
      type: 'paragraph',
      text: 'If RF and Wi-Fi share an MCU and supply, a firmware crash or brownout can disable both. Cloud reconnection loops can also obstruct local handling if the firmware is poorly designed. Two radios are not two fully independent systems.'
    },
    {
      type: 'callout',
      title: 'Specify the surviving function',
      text: 'Write the requirement as an observable action: the paired handset must switch the specified load while the internet is disconnected and the access point is powered off.'
    },
    {
      type: 'heading',
      text: '433 MHz: A Link Budget, Not a Through-Wall Guarantee',
      id: 'why-433mhz-still-matters-through-walls'
    },
    {
      type: 'paragraph',
      text: 'The longer wavelength of a sub-GHz link can be useful in a building, but frequency alone does not determine installed coverage.'
    },
    {
      type: 'paragraph',
      text: 'At 2.4 GHz the wavelength is about 12.5 cm; at 433 MHz it is about 69 cm. The compact antenna in a switch enclosure may be electrically small at the lower frequency, so antenna efficiency and placement remain significant constraints.'
    },
    {
      type: 'paragraph',
      text: 'The final link also depends on legal transmit power, receiver bandwidth, sensitivity, interference and the building materials. Metal can block or detune either system. A blanket promise that 433 MHz penetrates all walls is not supportable.'
    },
    {
      type: 'paragraph',
      text: 'TI\'s radio-range guidance treats receiver selectivity and blocking alongside the link budget and environment. A low-noise site test does not establish performance beside a noisy power supply or another transmitter.',
      links: [
        {
          text: 'TI\'s radio-range guidance',
          href: 'https://www.ti.com/lit/an/swra479a/swra479a.pdf'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'Choose the local frequency and operating conditions for the destination market. Test the handset and installed receiver together; an RF label or a quoted open-field distance does not establish room-to-room reliability.'
    },
    {
      type: 'heading',
      text: 'Find the Source of Coexistence Problems',
      id: 'the-hard-part-is-radio-coexistence'
    },
    {
      type: 'paragraph',
      text: 'A 433 MHz receiver and a 2.4 GHz Wi-Fi transmitter do not share the same intended channel. Problems can still occur through receiver blocking, unwanted emissions, supply coupling or common digital circuitry.'
    },
    {
      type: 'paragraph',
      text: 'Start by comparing RF command success with Wi-Fi idle, connecting and actively transmitting. Repeat at the same RF signal level so a change in handset position does not conceal the result.'
    },
    {
      type: 'paragraph',
      text: 'If reception deteriorates, inspect both the electrical and radio paths. A supply dip during a Wi-Fi burst is different from an interfering spur at the RF input, and needs a different correction.'
    },
    {
      type: 'paragraph',
      text: 'Relay switching and the connected load can introduce another disturbance. Include load transitions in the investigation rather than testing only an unloaded board on a bench supply.'
    },
    {
      type: 'paragraph',
      text: 'Do not assume every failure is radio interference. Missed interrupts, buffer handling, duplicate commands and blocking cloud code can produce similar user-visible delays.'
    },
    {
      type: 'heading',
      text: 'Keep Power and Command Handling Predictable',
      id: 'power-isolation-and-timing-are-the-real-design-work'
    },
    {
      type: 'paragraph',
      text: 'Follow the component suppliers\' reference designs for supply capacity, decoupling, RF routing and antenna clearance. Then verify the combined product in its actual enclosure.'
    },
    {
      type: 'paragraph',
      text: 'Filtering or separate regulation can reduce conducted noise, but an LDO\'s rejection varies with frequency and operating conditions. Separate rails are not mandatory for every design, and splitting ground carelessly can create poor return paths.'
    },
    {
      type: 'paragraph',
      text: 'Espressif\'s hardware guidelines describe continuous reference ground, local decoupling and separation between RF paths and high-frequency signals. Use the guidance for the selected chip or module rather than copying one layout into a different product.',
      links: [
        {
          text: 'Espressif\'s hardware guidelines',
          href: 'https://docs.espressif.com/projects/esp-hardware-design-guidelines/en/latest/esp32/pcb-layout-design.html'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'Firmware must accept local commands during network retries and other lengthy operations. Prioritizing a decoded command can improve response, but cannot recover a packet already lost to interference.'
    },
    {
      type: 'paragraph',
      text: 'A radio may offer coexistence or scheduling controls; use them only when the hardware and stack support them. Pausing Wi-Fi in response to an unknown one-way RF arrival is not a universal solution.'
    },
    {
      type: 'callout',
      title: 'Measure the symptom',
      text: 'Record supply voltage, received-command success and output behavior during the same workload. That separates a power fault, reception loss and delayed command processing.'
    },
    {
      type: 'heading',
      text: 'Validate the Finished Product and Production Changes',
      id: 'manufacturing-is-where-the-design-holds-or-falls-apart'
    },
    {
      type: 'paragraph',
      text: 'Record the board revision, module, antenna, enclosure and firmware used for each validation. These define the tested configuration.'
    },
    {
      type: 'paragraph',
      text: 'Component substitutions can alter frequency tolerance, filtering or supply performance. Assess a proposed substitution against the design requirements and relevant tests rather than assuming its grade name predicts the result.'
    },
    {
      type: 'paragraph',
      text: 'Frequency error becomes important when it approaches the receiver\'s usable bandwidth. Compare transmitter and receiver tolerances over the specified temperature and supply ranges.'
    },
    {
      type: 'paragraph',
      text: 'A crystal marked industrial grade does not establish adequate RF performance by itself. Its tolerance, loading, aging and temperature behavior must fit the radio design.'
    },
    {
      type: 'paragraph',
      text: 'Use conducted or radiated measurements appropriate to the finished product. An impedance match is useful evidence about the antenna feed; it is not a complete measurement of radiation efficiency or range.'
    },
    {
      type: 'paragraph',
      text: 'Include network reconnection, sustained Wi-Fi traffic, repeated RF commands and relay/load switching in the test plan. Set acceptance criteria before testing, and retain the observed failures instead of reporting only the longest successful range.'
    },
    {
      type: 'heading',
      text: 'Where a Second Local Link Can Help',
      id: 'where-dual-mode-actually-earns-its-cost'
    },
    {
      type: 'paragraph',
      text: 'Dual mode is useful when an additional handheld or wireless wall control solves an actual installation need and its maintenance cost is acceptable.'
    },
    {
      type: 'paragraph',
      text: 'For lighting, define how the wall button, RF remote and app affect the same output. A one-way toggle command can leave the app\'s displayed state wrong unless the switch reports its actual output state.'
    },
    {
      type: 'paragraph',
      text: 'For curtains and shutters, the radio should send requests to a suitable motor controller. Reversing interlocks, travel limits and stopping behavior belong in that controller and must remain effective on every input path.'
    },
    {
      type: 'paragraph',
      text: 'A sensor-to-gateway system is another architecture, but a lighting receiver does not automatically become an alarm receiver. Alarm supervision, missing-device detection and event delivery require explicit product support.'
    },
    {
      type: 'list',
      items: [
        'Lighting: specify local commands, load ratings and state reporting after handset operation.',
        'Curtains and shutters: keep motor direction, limits and stop priority in a compatible controller.',
        'Sensor gateways: specify message acknowledgment, supervision and what happens when the internet is unavailable.',
        'Access control: require revocable credentials and compatible authentication; a second input path must not bypass the access policy.'
      ]
    },
    {
      type: 'heading',
      text: 'Write the OEM Requirements before Layout',
      id: 'odm-requirements-buyers-should-clarify-early'
    },
    {
      type: 'paragraph',
      text: 'The product specification needs separate descriptions for its RF control protocol and network application. A cloud platform name does not define the RF handset.'
    },
    {
      type: 'paragraph',
      text: 'Specify command meanings and priority. If the app sends on while the remote sends off, the switch needs a defined result. Prefer explicit on/off commands where supported, and document duplicate-packet handling.'
    },
    {
      type: 'paragraph',
      text: 'Define security on each path. A recorded fixed-code RF command may be replayed even when the Wi-Fi app is well protected. Rolling code is one mechanism, but implementation, pairing and lost-remote deletion still matter.'
    },
    {
      type: 'paragraph',
      text: 'The radio combination, enclosure and software affect the conformity assessment. The EU Radio Equipment Directive includes safety, EMC and spectrum requirements; any applicable cybersecurity scope must also be evaluated for the actual product.',
      links: [
        {
          text: 'EU Radio Equipment Directive',
          href: 'https://single-market-economy.ec.europa.eu/sectors/electrical-and-electronic-engineering-industries-eei/radio-equipment-directive-red_en'
        }
      ]
    },
    {
      type: 'list',
      items: [
        'Destination market, permitted radio operation and the exact assessment scope.',
        'RF frequency, modulation, coding, pairing, deletion and acknowledgment behavior.',
        'Wi-Fi band, authentication, controller or cloud dependencies and update support.',
        'Load type, switching ratings, enclosure, wiring and antenna arrangement.',
        'Behavior during internet loss, access-point loss, reconnection, power restoration and firmware failure.',
        'Command priority, output-state reporting and sample acceptance criteria.'
      ]
    },
    {
      type: 'heading',
      text: 'Evaluate the Whole Control Chain',
      id: 'the-underlying-logic'
    },
    {
      type: 'paragraph',
      text: 'A second radio can remove a particular network dependency. It does not remove power, firmware, receiver or load-controller dependencies.'
    },
    {
      type: 'paragraph',
      text: 'Test every promised fallback directly. If local control is claimed during internet loss, demonstrate that case; if it is also claimed during access-point failure, demonstrate that separately.'
    },
    {
      type: 'paragraph',
      text: 'Schedules, voice control and app status may have different dependencies from basic RF switching. Keep those distinctions in the manual and product listing.'
    },
    {
      type: 'quote',
      text: 'The value of dual mode is the function it preserves under a specified failure.'
    },
    {
      type: 'paragraph',
      text: 'For a product with dropouts, first collect the failed control path, installation, firmware and load conditions. That determines whether a second radio addresses the cause or whether the existing supply, network or command handling needs repair.'
    },
  ],
  'rf-remote-wholesale-price-cost-drivers': [
    {
      type: 'paragraph',
      text: 'Two remotes with similar housings can arrive with different wholesale quotes. Before judging the gap, check whether the offers cover the same receiver compatibility, quantities, materials, tests and delivery terms.'
    },
    {
      type: 'paragraph',
      text: 'A unit price without that scope is difficult to compare. One offer may include batteries and packaging; another may leave them out or spread development costs over a different order quantity.'
    },
    {
      type: 'paragraph',
      text: 'There is no reliable rule that the chip is always the largest cost or that the higher-priced remote is more dependable. Ask for the specification and the identifiable items behind the quote.'
    },
    {
      type: 'paragraph',
      text: 'The useful comparison has four parts: electronics and firmware, physical parts, production and verification, and market-specific documentation. Separate recurring unit cost from tooling and other one-time charges.'
    },
    {
      type: 'image',
      src: illustratedBlogPhotos['rf-remote-wholesale-price-cost-drivers'].image,
      srcSet: illustratedBlogPhotos['rf-remote-wholesale-price-cost-drivers'].imageSrcSet,
      alt: 'Illustration: Two generic remote assemblies laid out for component comparison',
      caption: 'Illustration of the article topic.'
    },
    {
      type: 'heading',
      text: 'Electronics: Compare the Required Function',
      id: 'the-core-chip-is-the-biggest-cost-variable'
    },
    {
      type: 'paragraph',
      text: 'The encoder, RF circuit and firmware should be selected for the receiver and application. A cheaper chip that cannot enroll with the installed receiver is not a substitute for the required one.'
    },
    {
      type: 'paragraph',
      text: 'A static-code design sends a repeated identifier. It can be suitable for some control tasks, but should not be priced or marketed as though it provides authenticated freshness.'
    },
    {
      type: 'paragraph',
      text: 'The term learning code often describes a receiver storing a transmitter ID. It does not establish encryption, a changing code or broad copy-device compatibility. Have the supplier define what it means for the offered product.'
    },
    {
      type: 'paragraph',
      text: 'The HCS301 datasheet describes an encrypted hopping code and keys, serial number and configuration programmed during production. For an offer based on that device, ask who manages production programming, how the required configuration is controlled and which receiver family was tested. If a separate MCU is used, identify its firmware revision as well.',
      links: [
        {
          text: 'HCS301 datasheet',
          href: 'https://ww1.microchip.com/downloads/aemDocuments/documents/MCU08/ProductDocuments/DataSheets/21143C.pdf'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'Do not assume a fixed multiple between static and rolling-code costs. The quoted cost depends on the part, quantity, supply terms, programming work and the rest of the assembly.'
    },
    {
      type: 'heading',
      text: 'RF Architecture: Compare the Complete Circuit',
      id: 'rf-architecture-changes-both-cost-and-consistency'
    },
    {
      type: 'paragraph',
      text: 'A handheld one-way transmitter does not need a receiver. Comparing its price using super-regenerative versus superheterodyne receiver architecture mixes two different products.'
    },
    {
      type: 'paragraph',
      text: 'An integrated transmitter can combine functions that otherwise need separate parts. Microchip\'s MICRF112, for example, uses a crystal reference and PLL with an RF power amplifier. That changes the component list; it does not by itself prove lower cost or better assembled-product performance.',
      links: [
        {
          text: 'MICRF112',
          href: 'https://ww1.microchip.com/downloads/aemDocuments/documents/WSG/ProductDocuments/DataSheets/MICRF112-Data-Sheet-DS70005554.pdf'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'For a transmitter, compare frequency stability, supported modulation, supply limits and assembled RF results. For a transmitter-and-receiver kit, price and evaluate both ends separately.'
    },
    {
      type: 'callout',
      title: 'Match the scope first',
      text: 'Ask for the exact remote revision and supported receiver. Compare offers against the same functional requirements before comparing component choices.'
    },
    {
      type: 'heading',
      text: 'Materials: Ask for Grades and Ratings',
      id: 'every-cent-in-component-selection-shows-up-later'
    },
    {
      type: 'paragraph',
      text: 'Parts can differ in dimensions, tolerances and environmental limits. Record the specified part or material grade rather than treating premium as a measurable property.'
    },
    {
      type: 'paragraph',
      text: 'For the oscillator, request frequency tolerance over the required voltage and temperature range. SAW, crystal and LC describe implementations; none is an automatic quality grade for the finished remote.'
    },
    {
      type: 'paragraph',
      text: 'A room-temperature frequency check is useful screening, but it cannot establish operation across the whole environmental range. Ask for the conditions used in qualification and for any limits on battery voltage.'
    },
    {
      type: 'paragraph',
      text: 'PCB material needs the same treatment. Panasonic lists paper phenolic laminates for remote-control applications. FR-4 can also be specified, but the correct comparison is between known grades and required properties, not board colour or a blanket ranking.',
      links: [
        {
          text: 'Panasonic',
          href: 'https://industrial.panasonic.com/ww/products/pt/paper-phenolic/pphr8700'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'Compare the PCB finish with the soldering process and contact design. A finish intended for solder pads should not be assumed to solve wear on exposed button or battery contacts.'
    },
    {
      type: 'paragraph',
      text: 'For the housing, request the resin grade and the relevant strength, aging or flammability requirement. Recycled content alone does not establish brittleness, just as a virgin-material claim does not prove the housing passes a drop test.'
    },
    {
      type: 'paragraph',
      text: 'For buttons, the switch or dome rating, actuator alignment and PCB support all matter. Confirm the conditions behind a life claim and test the finished assembly, rather than predicting failure from its price.'
    },
    {
      type: 'list',
      items: [
        'Specify oscillator tolerance and test conditions.',
        'Identify the laminate grade, thickness and PCB finish.',
        'Record housing material and the mechanical checks required.',
        'Identify the switch or dome and button life-test conditions.',
        'Require approval for relevant substitutions to the agreed parts.'
      ]
    },
    {
      type: 'heading',
      text: 'Production: Pay for Defined Checks',
      id: 'manufacturing-and-quality-control-separate-serious-factories'
    },
    {
      type: 'paragraph',
      text: 'Assembly and inspection add labor, equipment time and fixtures. Ask what those activities actually check and whether they are included in the price.'
    },
    {
      type: 'paragraph',
      text: 'Automation can improve repeatability, but a controlled manual process can also be appropriate. Equipment photographs do not establish the soldering settings or acceptance limits used for your order.'
    },
    {
      type: 'paragraph',
      text: 'Omron\'s inspection documentation describes AOI and X-ray checks of solder geometry. They help control assembly defects; they do not replace a functional check that the required button sends a message the receiver accepts.',
      links: [
        {
          text: 'inspection documentation',
          href: 'https://www.omron.com/global/en/technology/omrontechnics/vol54/009.html'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'Separate production screening from design qualification. Every-unit button and transmit checks have a different scope and cost from sampled environmental or durability testing.'
    },
    {
      type: 'paragraph',
      text: 'An RF fixture can screen frequency and output under defined conditions. A controlled range test checks the finished link. Agree the limits, sample plan and record format instead of accepting tested as a complete specification.'
    },
    {
      type: 'paragraph',
      text: 'Ask how reworked units are inspected again and how test records identify the batch. Higher test expenditure is useful only if the chosen checks address a requirement or a known fault.'
    },
    {
      type: 'heading',
      text: 'Market Requirements: Price the Actual Variant',
      id: 'compliance-is-the-entry-ticket-for-global-markets'
    },
    {
      type: 'paragraph',
      text: 'A wholesale quote should identify the destination market and the exact hardware configuration covered by its documentation.'
    },
    {
      type: 'paragraph',
      text: 'Changing the band can change the reference oscillator, matching parts and antenna. It can also change the applicable radio requirements. A configurable listing is not evidence that every selectable setting is covered.'
    },
    {
      type: 'paragraph',
      text: 'For EU sales, the Radio Equipment Directive provides the framework for radio-equipment conformity. CE marking is not one universal laboratory certificate. Ask for the applicable declaration and technical evidence for the offered model.',
      links: [
        {
          text: 'Radio Equipment Directive',
          href: 'https://single-market-economy.ec.europa.eu/single-market/european-standards/harmonised-standards/radio-equipment_en'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'For each destination, have the responsible party identify the required assessment and documents. Agree who pays for testing, labels, instructions and evaluation of later changes; do not assume an unrelated report covers a rebranded or modified product.'
    },
    {
      type: 'heading',
      text: 'Questions that Clarify a Quote',
      id: 'faq-what-buyers-usually-ask'
    },
    {
      type: 'paragraph',
      text: 'Does one frequency cost more? Ask what changed in the offered design and assessment scope. Frequency alone does not establish which quote should be higher.'
    },
    {
      type: 'paragraph',
      text: 'What does supplier experience establish? Request a relevant test record, supported receiver list and change history. A claimed number of years does not prove that the current revision meets your specification.'
    },
    {
      type: 'paragraph',
      text: 'What can visual inspection establish? Check seams, button alignment, contacts and obvious solder defects. Appearance can reveal a problem to investigate, but cannot prove RF compatibility, security or long-term reliability.'
    },
    {
      type: 'heading',
      text: 'Compare the Delivered Cost',
      id: 'finding-the-real-meaning-of-value'
    },
    {
      type: 'paragraph',
      text: 'Include unit price, order quantity, packaging, batteries, setup charges, tooling, freight and applicable tax or duty. Keep one-time and recurring charges separate so a later order is comparable.'
    },
    {
      type: 'paragraph',
      text: 'For support costs, use your own return history, handling time and replacement terms. If those records are unavailable, show the assumption instead of assigning the cheaper offer a fictional failure rate.'
    },
    {
      type: 'paragraph',
      text: 'Approve the least costly offer that meets the required scope with adequate evidence. A higher quote may include useful work, unnecessary features or simply a different commercial margin; ask which it is.'
    },
    {
      type: 'quote',
      text: 'A price gap needs an explanation tied to the specification, delivery terms or verification work. It does not supply that explanation on its own.'
    },
    {
      type: 'paragraph',
      text: 'For a comparable quote, send the receiver models, required functions, destination, quantity, operating conditions and acceptance checks. Ask suppliers to identify exclusions and assumptions alongside the price.'
    },
  ],
  '433mhz-remote-short-range-diagnostics': [
    {
      type: 'paragraph',
      text: 'Two installations using the same remote can have very different usable range. That does not identify a bad batch by itself: the receivers, antennas, supplies and radio paths may differ.'
    },
    {
      type: 'quote',
      text: 'When one gate responds at distance and another needs a close approach, swap the remotes before deciding which part is at fault.'
    },
    {
      type: 'paragraph',
      text: 'A useful diagnosis follows the command from transmitter supply through the radio path to receiver decoding. Keep the test location and procedure fixed while changing one part.'
    },
    {
      type: 'image',
      src: illustratedBlogPhotos['433mhz-remote-short-range-diagnostics'].image,
      srcSet: illustratedBlogPhotos['433mhz-remote-short-range-diagnostics'].imageSrcSet,
      alt: 'Illustration: An opened remote and unconnected meter probes prepared for inspection',
      caption: 'Illustration of the article topic.'
    },
    {
      type: 'heading',
      text: 'Start with a Controlled Comparison',
      id: 'the-short-answer-first'
    },
    {
      type: 'paragraph',
      text: 'Test a known-good remote at both receivers, then test the suspect remote at the same locations. A failure that follows the remote points toward the transmitter; one that stays at the site points toward the receiver or installation.'
    },
    {
      type: 'paragraph',
      text: 'Next check supply voltage during a press, the receiver antenna arrangement and equipment operating nearby. These checks are accessible and can isolate several different causes.'
    },
    {
      type: 'paragraph',
      text: 'If those checks do not explain the result, measure transmitter output and frequency, receiver sensitivity and interference rejection. Do not infer any of these from a frequency label or a short-range response.'
    },
    {
      type: 'callout',
      title: 'Change one variable',
      text: 'Record the starting condition and attempt count. Substitute one battery, remote, supply or antenna position, then repeat the same commands. A simultaneous set of changes hides which one helped.'
    },
    {
      type: 'heading',
      text: 'An Indicator LED Is Not a Battery Test',
      id: 'do-not-trust-the-indicator-light'
    },
    {
      type: 'paragraph',
      text: 'A lit LED shows that its circuit receives enough voltage to emit light. It does not show that the radio output is correct or that the transmitter completes a valid command.'
    },
    {
      type: 'paragraph',
      text: 'Use the battery type specified for the remote. Some use an A23 battery; others use a coin cell. Their nominal voltages do not provide a universal minimum operating threshold.'
    },
    {
      type: 'paragraph',
      text: 'Measure at the transmitter supply during a button press and compare the minimum with the circuit’s operating requirements. For short dips, an oscilloscope or suitable capture instrument is more useful than a slowly updating meter.'
    },
    {
      type: 'paragraph',
      text: 'Inspect the contacts as well. A loose or corroded connection can add voltage drop even when the cell’s open-circuit voltage looks normal.'
    },
    {
      type: 'paragraph',
      text: 'On a new design, examine supply decoupling, current demand and reset behavior. A supply dip may reduce RF output, reset the controller or corrupt timing; the observed failure depends on the circuit.'
    },
    {
      type: 'list',
      items: [
        'Replace the cell with a known-good one of the specified type and repeat the fixed-location test.',
        'Measure the lowest supply voltage during transmission rather than only resting voltage.',
        'If measuring current, account for the meter or shunt’s added voltage drop.',
        'For coin cells, check the pulse voltage against the radio and MCU requirements, including late-life and cold conditions.'
      ]
    },
    {
      type: 'heading',
      text: 'Check the Antenna in Its Installed Position',
      id: 'the-antenna-is-not-a-decoration'
    },
    {
      type: 'paragraph',
      text: 'A wire squeezed against a metal cabinet can behave differently from the same antenna clear of it. Follow the receiver’s approved mounting and antenna instructions before making changes.'
    },
    {
      type: 'paragraph',
      text: 'A free-space quarter-wave wire at 433.92 MHz starts around 17.3 cm. Ground plane, enclosure and nearby objects alter the installed antenna. A deliberately designed helix or PCB antenna should not be straightened or extended by guesswork.',
      links: [
        {
          text: 'quarter-wave wire',
          href: 'https://www.ti.com/lit/an/swra161b/swra161b.pdf'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'Where the receiver supports it, compare the specified external antenna in a clear position with the original installation. Record the result; no fixed distance gain follows from moving it outside a cabinet.'
    },
    {
      type: 'list',
      items: [
        'Check antenna type, connection, damage and any prescribed ground or mounting arrangement.',
        'Keep a simple wire antenna in the shape specified by the manufacturer.',
        'Compare orientations while preserving the same test path; polarization can affect received signal.',
        'Use a supported external antenna if the radio is inside a metal cabinet, and include feedline loss.',
        'Repeat the range test with the cabinet and gate in their normal open and closed states.'
      ]
    },
    {
      type: 'heading',
      text: 'Separate Interference from Path Loss',
      id: 'something-may-be-shouting-over-your-signal'
    },
    {
      type: 'paragraph',
      text: 'A 433 MHz receiver may encounter other transmitters or unintended emissions. Local spectrum use is market-dependent; describing 315 MHz and 433 MHz as universally available shared bands is too broad.'
    },
    {
      type: 'paragraph',
      text: 'Supplies, LED drivers or motor electronics are possible noise sources, but their presence is not proof. Their emissions must reach the receive path or supply strongly enough to affect this particular receiver.'
    },
    {
      type: 'paragraph',
      text: 'Interference may overlap the desired channel or overload the receiver from another frequency. Receiver selectivity and blocking specifications describe different parts of this problem.',
      links: [
        {
          text: 'selectivity and blocking specifications',
          href: 'https://www.ti.com/lit/ds/symlink/cc1101.pdf'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'If the fault appears only at certain times, log which equipment changes state. With safe access to that equipment, perform an on/off comparison and restore the original condition to confirm the relationship.'
    },
    {
      type: 'list',
      items: [
        'Turn suspect nonessential equipment off one at a time and repeat the fixed-location test.',
        'Try an approved clean receiver supply to separate supply-borne noise from radio-path effects.',
        'Move the receiver or supported antenna away from the suspected source and compare results.',
        'If selecting another receiver, compare sensitivity, adjacent-channel rejection and blocking under the intended signal; architecture names alone do not establish performance.'
      ]
    },
    {
      type: 'heading',
      text: 'A Received Frame Can Still Be Rejected',
      id: 'encoding-can-change-the-experience-under-stress'
    },
    {
      type: 'paragraph',
      text: 'Coding does not change free-space propagation. It changes which received bit patterns the decoder accepts and how repeated commands are handled.'
    },
    {
      type: 'paragraph',
      text: 'For example, the HCS301 sends a 66-bit code word plus transmission framing. Airtime depends on baud rate and framing; a rolling-code receiver also checks authentication and synchronization.',
      links: [
        {
          text: 'HCS301',
          href: 'https://ww1.microchip.com/downloads/en/devicedoc/21143c.pdf'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'A longer frame has more opportunities for bit errors when other conditions are fixed. That does not make fixed code inherently longer-range: modulation, error checks, repetition and the receiver all affect command success.'
    },
    {
      type: 'paragraph',
      text: 'A remote that transmits but is not registered, uses incompatible timing or falls outside a rolling-code synchronization window can fail even nearby. Follow the receiver’s documented diagnosis and enrollment procedure.'
    },
    {
      type: 'list',
      items: [
        'Confirm exact frequency, modulation and code family, not only a 433 MHz label.',
        'Separate missing RF reception from a decoded command that the controller rejects.',
        'Check registration and synchronization using the receiver’s manual.',
        'Compare sensitivity figures only at matching waveform, data rate, bandwidth and error target.'
      ]
    },
    {
      type: 'heading',
      text: 'Check Power Changes Against the Product’s Rules',
      id: 'do-not-solve-export-range-problems-by-turning-up-power'
    },
    {
      type: 'paragraph',
      text: 'Increasing transmit power may improve a weak-signal link, but it cannot correct wrong coding or guarantee operation through interference.'
    },
    {
      type: 'paragraph',
      text: 'Radio limits depend on the country, equipment category and measurement method. Conducted power at the chip is not the same as ERP, EIRP or radiated field strength with the product antenna.'
    },
    {
      type: 'paragraph',
      text: 'The EU SRD decision sets conditional frequency entries; US periodic control transmitters have conditions under 47 CFR §15.231. Use the requirements and authorization for the actual product and destination rather than borrowing a power limit from another market.',
      links: [
        {
          text: 'EU SRD decision',
          href: 'https://eur-lex.europa.eu/eli/dec_impl/2025/105/oj/eng'
        },
        {
          text: '47 CFR §15.231',
          href: 'https://www.govinfo.gov/content/pkg/CFR-2024-title47-vol1/pdf/CFR-2024-title47-vol1-sec15-231.pdf'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'First recover avoidable losses: poor contacts, unsupported antenna placement and noisy receiver power. A hardware or power modification should then be evaluated for both radio performance and compliance.'
    },
    {
      type: 'heading',
      text: 'A Gateway Needs Its Own Evidence',
      id: 'from-key-to-system'
    },
    {
      type: 'paragraph',
      text: 'A gateway can add a separate remote-control path when the local handheld link does not cover every use case. It is an architecture change, not proof that the original RF fault is resolved.'
    },
    {
      type: 'paragraph',
      text: 'A phone command or a radio acknowledgment does not confirm that a gate closed. Position feedback requires a suitable sensor or documented status interface, and control remains subject to the gate operator’s safety functions.'
    },
    {
      type: 'paragraph',
      text: 'If a gateway is part of the project, test local operation with internet service unavailable and define how the user can confirm the actual gate state.'
    },
    {
      type: 'paragraph',
      text: 'Keep local range and remote access as separate acceptance items. Otherwise a working app can conceal a handheld link that still fails at the required approach point.'
    },
    {
      type: 'heading',
      text: 'What to Record for Technical Support',
      id: 'quick-field-diagnostic-checklist'
    },
    {
      type: 'list',
      items: [
        'Transmitter: model, revision, battery type, contact condition and lowest voltage during a press.',
        'Receiver: model, supply, antenna, mounting and any external cable.',
        'Compatibility: exact frequency, modulation, protocol and registration status.',
        'Path: distance, remote orientation, vehicle position and door/cabinet state.',
        'Interference: equipment on/off comparisons and time-dependent symptoms.',
        'Results: attempt counts and whether the failure follows a swapped remote or stays at one installation.'
      ]
    },
    {
      type: 'paragraph',
      text: 'Send these facts with the symptom. “Works at one gate, fails at another” is a starting point; the controlled comparison identifies where the next measurement belongs.'
    },
    {
      type: 'paragraph',
      text: 'If the cause remains uncertain, keep the original configuration available for reproduction. Replacing several parts can restore operation while leaving the underlying fault unexplained.'
    },
  ],
  'rf-receiver-sensitivity-range-spec': [
    {
      type: 'paragraph',
      text: 'A receiver sensitivity number is useful when two RF systems have different range. It is also easy to misuse: the number describes a specified waveform and error target, not a distance the finished product must reach.'
    },
    {
      type: 'paragraph',
      text: 'If a command works nearby and fails farther away, compare the desired signal at the receiver with the threshold needed for reliable decoding. Supply faults, antenna losses and interference can all change that comparison.'
    },
    {
      type: 'paragraph',
      text: 'Before buying a replacement receiver, ask how its sensitivity was measured and whether those settings match your transmitter. A better-looking dBm value may describe a much slower link.'
    },
    {
      type: 'image',
      src: illustratedBlogPhotos['rf-receiver-sensitivity-range-spec'].image,
      srcSet: illustratedBlogPhotos['rf-receiver-sensitivity-range-spec'].imageSrcSet,
      alt: 'Illustration: A generic receiver board and bench instrument, with no displayed measurements',
      caption: 'Illustration of the article topic.'
    },
    {
      type: 'heading',
      text: 'Sensitivity Measures a Receive Threshold',
      id: 'a-thought-experiment-first'
    },
    {
      type: 'paragraph',
      text: 'A sensitivity test applies a known RF waveform at progressively lower input power. The threshold is the level where a stated error criterion is reached.'
    },
    {
      type: 'paragraph',
      text: 'That criterion might be bit error rate, BER, or packet error rate, PER. They are not interchangeable: a packet contains many bits and may be rejected if any required bit is wrong.'
    },
    {
      type: 'paragraph',
      text: 'The measured point is usually a defined conducted RF input. It excludes some losses in the product antenna and installed path, unless the specification explicitly uses a radiated test.'
    },
    {
      type: 'paragraph',
      text: 'Receiver sensitivity therefore answers a narrow question: how weak can this waveform be at this input while meeting this error target? It does not answer how well the receiver tolerates another transmitter nearby.'
    },
    {
      type: 'callout',
      title: 'Keep the conditions with the number',
      text: 'Record frequency, modulation, rate, deviation, bandwidth, packet length, error criterion, supply and temperature. Compare sensitivity only after those conditions are aligned.'
    },
    {
      type: 'heading',
      text: 'Read dBm as a Power Level',
      id: 'that-confusing-negative-number'
    },
    {
      type: 'paragraph',
      text: 'dBm expresses power relative to 1 mW: P(dBm) = 10 log10[P(mW)]. A negative value is a small positive power, not negative energy.'
    },
    {
      type: 'paragraph',
      text: 'Under the same conditions, a more negative threshold means the receiver can meet the criterion with less input power. It does not automatically mean better interference rejection.'
    },
    {
      type: 'paragraph',
      text: 'For example, thresholds of -105 dBm and -90 dBm differ by 15 dB. Treat those as hypothetical, comparable specifications rather than claims about generic receiver classes.'
    },
    {
      type: 'paragraph',
      text: 'The power ratio is 10^(15/10), approximately 31.6. A 15 dB improvement means the same receive criterion can be met with about one-thirty-second of the input power.'
    },
    {
      type: 'paragraph',
      text: 'The CC1101 datasheet shows why the test conditions matter: its 433 MHz -116 dBm figure uses 0.6 kBaud GFSK, 20-byte packets, 1% PER, 14.3 kHz deviation and a 58 kHz channel filter.',
      links: [
        {
          text: 'CC1101 datasheet',
          href: 'https://www.ti.com/lit/ds/symlink/cc1101.pdf'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'That number cannot be carried over to an arbitrary ASK gate remote or faster CC1101 setting. Check whether a quoted value is typical or guaranteed and how it changes across the rated supply and temperature range.'
    },
    {
      type: 'heading',
      text: 'Use Free-Space Loss as a Model',
      id: 'how-distance-eats-the-signal'
    },
    {
      type: 'paragraph',
      text: 'The ITU free-space model gives about 6 dB more path loss when distance doubles, with frequency and antenna gains unchanged.',
      links: [
        {
          text: 'ITU free-space model',
          href: 'https://www.itu.int/dms_pubrec/itu-r/rec/p/R-REC-P.525-5-202411-I!!PDF-E.pdf'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'This model assumes a free-space path. A real gate installation includes ground reflection, obstructions and changing orientation, so received power may rise or fall irregularly as the user moves.'
    },
    {
      type: 'paragraph',
      text: 'For illustration only, assume -75 dBm at 50 m and ideal free-space scaling. The calculated levels, not measured product results, would be:'
    },
    {
      type: 'list',
      items: [
        '50 m: -75 dBm, assumed starting value.',
        '100 m: about -81 dBm.',
        '200 m: about -87 dBm.',
        '400 m: about -93 dBm.',
        '800 m: about -99 dBm.'
      ]
    },
    {
      type: 'paragraph',
      text: 'At the calculated -87 dBm point, a -90 dBm threshold leaves only 3 dB of margin; a comparable -105 dBm threshold leaves 18 dB. Neither margin guarantees operation at a site with fading or interference.'
    },
    {
      type: 'paragraph',
      text: 'Margin is received power minus the required receive threshold, in dB. A useful design reserves some of it for battery, temperature, orientation and installation variation rather than operating continuously at the threshold.'
    },
    {
      type: 'paragraph',
      text: 'Decide how much reserve the application needs through testing and its consequences of failure. There is no universal margin that makes every gate or building reliable.'
    },
    {
      type: 'heading',
      text: 'Compare Receiver Improvement with More Transmit Power',
      id: 'why-not-just-turn-up-the-power'
    },
    {
      type: 'paragraph',
      text: 'If all other link-budget terms remain fixed, extra transmit power and a lower sensitivity threshold can both increase weak-signal margin.'
    },
    {
      type: 'paragraph',
      text: 'Transmit changes must stay within the radio conditions and product authorization for the destination. A chip’s maximum output setting is not a legal allowance for the finished transmitter.'
    },
    {
      type: 'paragraph',
      text: 'In free space, twice the distance takes roughly 6 dB more link budget. Obtaining that solely from transmit power requires about four times the RF output power, not merely twice.'
    },
    {
      type: 'paragraph',
      text: 'Battery-current change depends on the power amplifier and supply efficiency; it cannot be calculated from RF output alone. Check current, pulse voltage and unwanted emissions at the proposed setting.'
    },
    {
      type: 'paragraph',
      text: 'A receiver upgrade can add margin without increasing transmitter output. It helps only if the waveform is compatible and receiver performance, rather than local interference or antenna loss, limits the link.'
    },
    {
      type: 'callout',
      title: 'Choose the change from the fault',
      text: 'Compare receiver sensitivity, antenna loss and transmitter output under controlled conditions. A component upgrade earns its place when it addresses the measured limit.'
    },
    {
      type: 'heading',
      text: 'Noise, Bandwidth and Frequency Error',
      id: 'what-actually-determines-sensitivity'
    },
    {
      type: 'paragraph',
      text: 'Receiver noise figure, noise bandwidth and the demodulator’s required signal-to-noise ratio set a simplified sensitivity limit.'
    },
    {
      type: 'paragraph',
      text: 'At about room temperature, a common estimate is sensitivity (dBm) ≈ -174 + 10 log10[B in Hz] + noise figure (dB) + required SNR (dB). This models thermal noise and receiver-added noise, not arbitrary external interference.',
      links: [
        {
          text: 'common estimate',
          href: 'https://www.ti.com/lit/pdf/swra682'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'Loss ahead of the receive circuit reduces usable margin. Receiver filtering, gain control and dynamic range also determine behavior around strong unwanted signals; low-noise performance alone does not establish that behavior.'
    },
    {
      type: 'paragraph',
      text: 'Modulation, rate and coding affect required SNR and airtime. A slow FSK setting may beat a particular wideband ASK setting, but “FSK” alone is not a sufficient purchasing specification.'
    },
    {
      type: 'paragraph',
      text: 'Antenna mismatch and feedline loss reduce power delivered to the receiver. A good impedance match is only one antenna property; radiation efficiency and pattern must also suit the installation.'
    },
    {
      type: 'paragraph',
      text: 'Narrowing bandwidth reduces admitted thermal noise, but it must still pass the signal and accommodate transmitter/receiver frequency error. TI’s frequency-offset note shows this tradeoff; an excessively narrow filter can reject a legitimate transmitter.',
      links: [
        {
          text: 'TI’s frequency-offset note',
          href: 'https://www.ti.com/lit/an/swra122d/swra122d.pdf'
        }
      ]
    },
    {
      type: 'heading',
      text: 'Questions for a Receiver Supplier',
      id: 'buying-guidance-the-traps-worth-avoiding'
    },
    {
      type: 'paragraph',
      text: 'Ask for a complete test condition and the point where power was measured. A module-level result may differ from the chip datasheet because of its matching, filtering, layout and supply.'
    },
    {
      type: 'list',
      items: [
        'Conditions: frequency, modulation, rate, deviation, noise bandwidth and BER/PER target.',
        'Packet test: packet length, count and method for identifying valid frames.',
        'Measurement: RF reference plane, cable/attenuator calibration and conducted versus radiated setup.',
        'Variation: typical and limit values across supply, temperature and production samples.',
        'Interference: co-channel behavior, adjacent-channel rejection and blocking at stated desired-signal levels.',
        'Installation: supported antenna and cable arrangements, plus range tests at the required locations.'
      ]
    },
    {
      type: 'paragraph',
      text: 'Also check response latency and compatibility. Lowering the data rate may improve sensitivity while increasing airtime, delaying a command and giving overlapping traffic more opportunity to interfere.'
    },
    {
      type: 'heading',
      text: 'Verify the Cause with the Actual System',
      id: 'back-at-the-starting-line'
    },
    {
      type: 'paragraph',
      text: 'A useful comparison keeps the transmitter, waveform, path and antennas fixed while substituting the receiver. Repeat enough commands to count missed responses and record whether controller decoding accepts them.'
    },
    {
      type: 'paragraph',
      text: 'For a bench sensitivity test, inject the documented packet waveform through a calibrated loss path and reduce power until the agreed error target is reached. Control unwanted RF pickup so it does not bypass the attenuator.'
    },
    {
      type: 'paragraph',
      text: 'For the site test, use the final enclosure and mounting. A bench improvement may be consumed by antenna loss or interference at the installed receiver.'
    },
    {
      type: 'paragraph',
      text: 'If the receiver upgrade does not help, investigate the other terms instead of assuming the advertised sensitivity is false. Check output frequency, supply behavior, decoder compatibility and the local spectrum.'
    },
    {
      type: 'quote',
      text: 'A sensitivity specification is a receive threshold with conditions, not a range guarantee.'
    },
    {
      type: 'paragraph',
      text: 'TI’s PHY measurement guide gives a conducted-test starting point. Adapt the waveform and error criterion to the receiver being evaluated, then retain the settings and raw results with the purchase specification.',
      links: [
        {
          text: 'TI’s PHY measurement guide',
          href: 'https://www.ti.com/lit/pdf/swra682'
        }
      ]
    },
  ],
  'rf-remote-controller-application-scenarios': [
    {
      type: 'paragraph',
      text: 'An RF receiver can carry a command across a room or yard, but the equipment downstream determines what that command should do. A relay board that switches a lamp is not automatically suitable for a shutter, pump or lifting mechanism.'
    },
    {
      type: 'paragraph',
      text: 'RF control usually does not need a direct optical line of sight. Range still depends on the radio link, antenna placement, building materials and interference. Infrared can also work through reflected paths, so the distinction is not simply that any obstruction stops one technology.'
    },
    {
      type: 'paragraph',
      text: 'The ten applications below share a transmitter-to-controller path. Their output interfaces, load ratings, feedback and stopping requirements differ.'
    },
    {
      type: 'paragraph',
      text: 'Before selecting a receiver, define the requested action and the controller that will execute it. This avoids buying a long-range radio with the wrong electrical output or an unsuitable control mode.'
    },
    {
      type: 'image',
      src: illustratedBlogPhotos['rf-remote-controller-application-scenarios'].image,
      srcSet: illustratedBlogPhotos['rf-remote-controller-application-scenarios'].imageSrcSet,
      alt: 'Illustration: A barrier arm at a modest commercial entrance',
      caption: 'Barrier entrance shown as an RF control application.'
    },
    {
      type: 'heading',
      text: 'Map the System Link First',
      id: 'map-the-system-link-first'
    },
    {
      type: 'paragraph',
      text: 'Treat the radio as one part of the system: transmitter, receiver, equipment controller and load. Several functions may share a board, but their requirements remain separate.'
    },
    {
      type: 'list',
      items: [
        'Transmitter: the handset or wireless wall control, with a defined command set and enrollment method.',
        'Receiver: the matching frequency, modulation and protocol, with defined behavior for missing or repeated packets.',
        'Equipment controller: the switch, motor drive, access controller or other unit that accepts the request and applies its limits.',
        'Load: the actual light, motor, valve or equipment, including its supply, startup behavior and operating duty.'
      ]
    },
    {
      type: 'paragraph',
      text: 'Clarify these questions with the equipment documentation in hand. A channel count and a current printed on a relay are not enough.'
    },
    {
      type: 'list',
      items: [
        'Which controller input is available: dry contact, voltage input, bus command or a supported accessory interface?',
        'What do press, hold, release, repeat, stop and power restoration mean for this equipment?',
        'Which load-specific switching ratings and protection are required?',
        'How are remotes enrolled, individually revoked and prevented from controlling the wrong receiver?',
        'What happens after packet loss, a receiver reset or loss of the equipment\'s supply?'
      ]
    },
    {
      type: 'heading',
      text: 'Garage Doors and Courtyard Gates',
      id: 'garage-doors-and-courtyard-gates'
    },
    {
      type: 'paragraph',
      text: 'A retrofit receiver should send a compatible request to the door or gate operator\'s designated input. The operator retains responsibility for travel, limits, obstruction detection and other installed protective functions.'
    },
    {
      type: 'paragraph',
      text: 'Access security and movement protection are separate concerns. CPSC\'s garage-door and gate-operator material addresses entrapment protection; a rolling-code radio does not provide that protection.',
      links: [
        {
          text: 'CPSC\'s garage-door and gate-operator material',
          href: 'https://www.cpsc.gov/Regulations-Laws--Standards/Voluntary-Standards/Topics/Garage-Door-OperatorsGate-Operators?language=en'
        }
      ]
    },
    {
      type: 'list',
      items: [
        'Confirm the operator model and whether its input expects a momentary contact, a maintained contact or a specific accessory protocol.',
        'Keep the operator\'s limit and obstruction devices active; do not wire around them to obtain a remote opening function.',
        'Check credential management, enrollment and lost-remote deletion, as well as replay resistance.',
        'Verify antenna routing and approach-direction range with the receiver installed in its final enclosure.'
      ]
    },
    {
      type: 'callout',
      title: 'Control boundary',
      text: 'The radio requests movement; the operator determines whether and how that movement is allowed.'
    },
    {
      type: 'heading',
      text: 'Access Control, Electric Locks, and Barriers',
      id: 'access-control-electric-locks-and-barriers'
    },
    {
      type: 'paragraph',
      text: 'For an access installation, decide where permissions are checked. An anonymous relay pulse wired directly to a lock can bypass the identity and logging functions of the existing access controller.'
    },
    {
      type: 'list',
      items: [
        'Use a supported request or credential interface and confirm which events the access controller can identify and log.',
        'Check whether individual remotes can be deleted; a general receiver may only support deleting its whole memory.',
        'Define release duration, power-failure behavior and any required interaction with fire or exit controls.',
        'Keep an enrollment and revocation record that the property manager can maintain after installation.'
      ]
    },
    {
      type: 'callout',
      title: 'Logging boundary',
      text: 'A relay pulse is a command, not proof of who entered or whether the barrier actually opened.'
    },
    {
      type: 'heading',
      text: 'Roller Shutters, Motorized Curtains, and Awnings',
      id: 'roller-shutters-motorized-curtains-and-awnings'
    },
    {
      type: 'paragraph',
      text: 'Identify the motor interface first. Some motors take separate direction supplies; others require a proprietary bus or integrated radio. Two independent relay channels are not a universal motor controller.'
    },
    {
      type: 'list',
      items: [
        'Use a controller intended for that motor and its up, stop and down commands.',
        'Prevent simultaneous direction outputs and provide the motor\'s required reversal delay.',
        'Retain travel limits and any required obstacle, wind or other protection for the application.',
        'Confirm motor-load ratings, stopping priority and behavior after power restoration.'
      ]
    },
    {
      type: 'callout',
      title: 'Interlock requirement',
      text: 'Mutual exclusion must remain effective when commands arrive from different remotes or from another control path.'
    },
    {
      type: 'heading',
      text: 'Indoor and Outdoor Lighting Control',
      id: 'indoor-and-outdoor-lighting-control'
    },
    {
      type: 'paragraph',
      text: 'A wireless handset can add a control point without a new wall-button cable. The receiver still needs a suitable power connection, enclosure and switching device. OMRON distinguishes resistive, inductive, lamp and capacitive load behavior in relay selection.',
      links: [
        {
          text: 'OMRON',
          href: 'https://www.ia.omron.com/support/faq/answer/36/faq02165/'
        }
      ]
    },
    {
      type: 'list',
      items: [
        'Identify on/off or dimming operation; a relay provides switching, not general dimming.',
        'Use the rating for the actual lighting load, including driver inrush and the number of drivers connected.',
        'Check neutral requirements, wiring access, box space and any interaction with existing switches.',
        'For outdoor use, specify the complete installed enclosure and cable-entry protection, not only a receiver advertised as outdoor.'
      ]
    },
    {
      type: 'callout',
      title: 'Scene requirement',
      text: 'An all-off function needs explicit support and command mapping; extra remote buttons alone do not create a scene.'
    },
    {
      type: 'heading',
      text: 'Fans, Exhaust, and Fresh Air Systems',
      id: 'fans-exhaust-and-fresh-air-systems'
    },
    {
      type: 'paragraph',
      text: 'Fan-speed control may use motor taps, a dedicated electronic drive or a low-voltage control input. A generic dimmer or several RF relays can be unsuitable even when simple on/off switching works.'
    },
    {
      type: 'list',
      items: [
        'Use the fan manufacturer\'s supported control interface and load ratings.',
        'Interlock speed outputs where the motor requires it; never assume multiple taps can be energized together.',
        'Define whether an overrun timer resides in the receiver or the ventilation controller.',
        'Keep antenna and control wiring clear of motor and drive wiring according to the installation instructions.'
      ]
    },
    {
      type: 'callout',
      title: 'Timer requirement',
      text: 'Specify the timer\'s trigger, duration, retrigger behavior and power-cycle result. A delay feature by itself does not establish energy savings.'
    },
    {
      type: 'heading',
      text: 'Water Pumps, Irrigation, and Pond Circulation',
      id: 'water-pumps-irrigation-and-pond-circulation'
    },
    {
      type: 'paragraph',
      text: 'An RF command can request pump or irrigation operation through a suitable controller. Hunter\'s pump-start guidance illustrates the interface boundary: its irrigation controller operates a pump-start relay rather than connecting directly to the pump.',
      links: [
        {
          text: 'Hunter\'s pump-start guidance',
          href: 'https://www.hunterirrigation.com/support/hydrawise-app-master-valvepump-start-relay'
        }
      ]
    },
    {
      type: 'list',
      items: [
        'Match the command to the existing pump or irrigation controller and the intended start/stop sequence.',
        'Use the required pump-start relay, contactor or drive with ratings appropriate to the actual motor.',
        'Retain overload, dry-run, level or pressure protection where the system requires them; a radio receiver does not supply these functions automatically.',
        'Assess moisture, cable entries, surge protection and antenna placement in the installed system.'
      ]
    },
    {
      type: 'callout',
      title: 'Feedback requirement',
      text: 'A successful transmitted command does not establish water flow, pump operation or the correct valve state.'
    },
    {
      type: 'heading',
      text: 'Electric Lifts and Linear Actuators',
      id: 'electric-lifts-and-linear-actuators'
    },
    {
      type: 'paragraph',
      text: 'For lifting or other hazardous movement, select an assessed control system for the mechanism. A receiver\'s momentary relay mode does not by itself establish hold-to-run behavior or a safe stop when a release packet is lost.'
    },
    {
      type: 'list',
      items: [
        'Define movement, travel limits, guarding, load holding and the required stop behavior through the equipment\'s risk assessment.',
        'Use hold-to-run control where required, with verified behavior on lost communication, depleted handset power and receiver failure.',
        'Retain required limits, interlocks and emergency-stop functions through the appropriate equipment control system.',
        'Do not retrofit a general lighting relay onto a personnel lift or other lifting system based only on contact capacity.'
      ]
    },
    {
      type: 'callout',
      title: 'Release requirement',
      text: 'Verify what stops motion when the receiver never hears the button-release message.'
    },
    {
      type: 'heading',
      text: 'Industrial Start and Stop Control',
      id: 'industrial-start-and-stop-control'
    },
    {
      type: 'paragraph',
      text: 'A radio can provide a normal command input to an industrial controller. Safety functions need the appropriate assessed control architecture, which may include safety-rated devices. The EU Machinery Directive explicitly addresses loss of communication in cable-less control.',
      links: [
        {
          text: 'loss of communication in cable-less control',
          href: 'https://eur-lex.europa.eu/legal-content/en/ALL/?uri=CELEX%3A32006L0042'
        }
      ]
    },
    {
      type: 'list',
      items: [
        'Confirm the machine\'s supported remote-control interface and which local controls have priority.',
        'Define authorization, mode selection, restart prevention and safe behavior on communication loss.',
        'Keep required safety functions in the assessed system; an ordinary PLC or dual confirmation alone does not establish functional safety.',
        'Validate the installed link with relevant drives and motors operating, and record the equipment\'s response to missed commands.'
      ]
    },
    {
      type: 'callout',
      title: 'Stop requirement',
      text: 'A stop button on a general-purpose RF remote is not automatically an emergency-stop device.'
    },
    {
      type: 'heading',
      text: 'Events, Stages, and Exhibition Setups',
      id: 'events-stages-and-exhibition-setups'
    },
    {
      type: 'paragraph',
      text: 'For temporary lighting or display control, map every button to an output before rehearsal. Shared venues can introduce other radio traffic, changed antenna positions and accidental presses.'
    },
    {
      type: 'list',
      items: [
        'Use compatible outputs for the intended lights or display equipment, with clear channel labels.',
        'Rehearse at the installed locations and with other venue equipment operating.',
        'Control access to pairing and avoid carrying a handset with exposed active buttons in a pocket.',
        'For stage machinery or hazardous effects, use the required dedicated control system rather than general-purpose RF relays.'
      ]
    },
    {
      type: 'callout',
      title: 'Rehearsal requirement',
      text: 'Confirm the output action, channel assignment and recovery procedure at the venue, not only on a bench.'
    },
    {
      type: 'heading',
      text: 'Upgrading Existing Equipment',
      id: 'upgrading-existing-equipment'
    },
    {
      type: 'paragraph',
      text: 'A retrofit works best when the equipment exposes a documented remote input. For a camera, that might be a digital alarm input with specified voltage limits and event configuration; a relay cannot transmit video or provide generic pan-tilt control. AXIS documentation provides an example of a model-specific input interface.',
      links: [
        {
          text: 'AXIS documentation',
          href: 'https://help.axis.com/en-US/axis-p1447-le'
        }
      ]
    },
    {
      type: 'list',
      items: [
        'Obtain the equipment\'s model, wiring diagram and supported command interface.',
        'Check whether a dry contact, powered input or protocol adapter is required; do not apply an assumed voltage.',
        'Keep existing local operation and protective functions available after the retrofit.',
        'Add scheduling or network access only through a compatible controller or gateway that actually supports those functions.'
      ]
    },
    {
      type: 'callout',
      title: 'Compatibility requirement',
      text: 'A relay can operate a documented contact input; it cannot make arbitrary equipment protocol-compatible.'
    },
    {
      type: 'heading',
      text: 'Define the Acceptance Test with the Application',
      id: 'sell-the-solution-not-the-remote'
    },
    {
      type: 'paragraph',
      text: 'For each installation, state the expected action, the controller interface and the failure behavior. Then test those requirements with the actual equipment and receiver configuration.'
    },
    {
      type: 'paragraph',
      text: 'Include normal operation, conflicting commands, lost communication and power restoration where relevant. Record output behavior rather than relying on a transmitter LED as confirmation.'
    },
    {
      type: 'paragraph',
      text: 'A usable sourcing brief contains the equipment model, interface, load type, installation conditions and required controls. That gives a supplier enough information to assess fit without promising that one receiver suits all ten applications.'
    },
  ],
  'exporting-wifi-switches-eu-ce-requirements': [
    {
      type: 'quote',
      text: 'A CE mark declares conformity for a defined product. The supporting evidence must describe the product that is actually shipped.'
    },
    {
      type: 'paragraph',
      text: 'A supplier\'s document headed CE certificate is not enough to assess a Wi-Fi switch. Ask which model, hardware revision and firmware it covers, which legislation applies and how conformity was assessed.'
    },
    {
      type: 'paragraph',
      text: 'The radio module\'s documents can support part of the assessment. They do not automatically cover the finished switch\'s wiring, load current, enclosure, antenna arrangement or software configuration.'
    },
    {
      type: 'paragraph',
      text: 'A mains-powered switch needs attention to the switched circuit as well as the wireless link. Electrical safety and EMC remain part of the radio-equipment assessment.'
    },
    {
      type: 'paragraph',
      text: 'The file also needs a responsible manufacturer, an EU Declaration of Conformity, identification and instructions matched to the product.'
    },
    {
      type: 'paragraph',
      text: 'Connected products add questions about internet capabilities, processed data, security functions and updates. These cannot be answered from an RF spectrum report alone.'
    },
    {
      type: 'paragraph',
      text: 'This guide describes the EU framework as checked on 5 October 2026. Product scope, intended use and the current standards listing still determine the assessment for a particular model.'
    },
    {
      type: 'paragraph',
      text: 'Start by collecting the product specification and existing evidence. That makes a gap review more useful than ordering a generic CE testing package.'
    },
    {
      type: 'image',
      src: illustratedBlogPhotos['exporting-wifi-switches-eu-ce-requirements'].image,
      srcSet: illustratedBlogPhotos['exporting-wifi-switches-eu-ce-requirements'].imageSrcSet,
      alt: 'Illustration: A generic switch enclosure beside a blank document folder',
      caption: 'Switch enclosure and document folder shown as a compliance illustration.'
    },
    {
      type: 'heading',
      text: 'CE Marking Is a Declaration Supported by Evidence',
      id: 'ce-is-not-a-certificate'
    },
    {
      type: 'paragraph',
      text: 'The manufacturer identifies the applicable legislation, performs the required conformity assessment, prepares technical documentation and draws up the EU Declaration of Conformity before applying the CE mark.',
      links: [
        {
          text: 'EU Declaration of Conformity',
          href: 'https://single-market-economy.ec.europa.eu/single-market/goods/ce-marking_en'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'A lab test report records an assessment of specified samples under specified conditions. A notified body\'s certificate may also be needed for a selected conformity route. Neither replaces the manufacturer\'s obligations.'
    },
    {
      type: 'paragraph',
      text: 'The assessment must address the product\'s intended use and reasonably foreseeable risks. Keep the findings, design evidence and relevant test reports with the technical documentation.'
    },
    {
      type: 'paragraph',
      text: 'A recognizable mark or a marketplace\'s acceptance of uploaded files does not prove that the evidence covers the final model.'
    },
    {
      type: 'callout',
      title: 'Document check',
      text: 'Ask for the declaration and supporting reports, then compare their identifiers, configurations and scope with the physical sample.'
    },
    {
      type: 'heading',
      text: 'RED Covers the Radio Switch\'s Safety, EMC and Spectrum',
      id: 'what-ce-usually-means-for-a-wi-fi-switch'
    },
    {
      type: 'paragraph',
      text: 'A finished switch that intentionally communicates by Wi-Fi is normally radio equipment under Directive 2014/53/EU. RED covers safety and health, electromagnetic compatibility and efficient spectrum use.'
    },
    {
      type: 'list',
      items: [
        'RED safety: Article 3(1)(a) incorporates the LVD safety objectives with no voltage limit. Low supply voltage does not remove a radio product from that requirement.',
        'RED EMC: Article 3(1)(b) covers electromagnetic compatibility. For radio equipment within RED, LVD and the EMC Directive do not apply separately; do not automatically list all three as parallel directives for the same switch.',
        'RoHS: Directive 2011/65/EU restricts specified substances in electrical and electronic equipment, subject to scope and exemptions; its evidence also forms part of the CE assessment.',
        'WEEE: waste-equipment marking, registration and producer responsibilities are separate obligations, not another CE laboratory test.'
      ]
    },
    {
      type: 'paragraph',
      text: 'For RED\'s relationship with the electrical directives, see the Commission\'s RED implementation report. Separately supplied equipment, such as an external power supply, may have its own applicable legislation and assessment.',
      links: [
        {
          text: 'Commission\'s RED implementation report',
          href: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A52018DC0740'
        }
      ]
    },
    {
      type: 'heading',
      text: 'Labels, Instructions and the EU Economic Operator',
      id: 'the-obligations-people-miss-in-practice'
    },
    {
      type: 'paragraph',
      text: 'Prepare the product label and instructions alongside the design. These are required product information, not documents to improvise after a test report arrives.'
    },
    {
      type: 'list',
      items: [
        'Keep model, batch or serial identification and the manufacturer information consistent with the declaration and shipped product.',
        'Provide instructions and safety information in the language or languages required by the Member State of sale.',
        'Identify the importer and the applicable EU-established economic operator; check their required markings rather than assuming one address satisfies every role.',
        'Review WEEE registration, reporting and financing duties for the actual producer role and countries of sale.',
        'Assess relevant REACH substance-information and packaging obligations for the product and distribution route.'
      ]
    },
    {
      type: 'paragraph',
      text: 'Article 4 of Regulation (EU) 2019/1020 requires an EU-established operator for covered products. The role may be an EU manufacturer, importer, mandated authorised representative or, where none of those is established in the EU, a qualifying fulfilment service provider. It is not simply a paid contact address.',
      links: [
        {
          text: 'Article 4 of Regulation (EU) 2019/1020',
          href: 'https://eur-lex.europa.eu/eli/reg/2019/1020/oj/eng'
        }
      ]
    },
    {
      type: 'heading',
      text: 'Cybersecurity: The Rules in Force in October 2026',
      id: 'cybersecurity-is-no-longer-just-future-talk'
    },
    {
      type: 'paragraph',
      text: 'Delegated Regulation (EU) 2022/30, as amended, has applied since 1 August 2025. The Commission has also published Regulation (EU) 2026/339, but its repeal of 2022/30 takes effect on 11 December 2027. The RED cybersecurity requirements activated by 2022/30 therefore still apply to equipment in scope on the date of this guide.',
      links: [
        {
          text: 'Delegated Regulation (EU) 2022/30',
          href: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A02022R0030-20231027'
        },
        {
          text: 'Regulation (EU) 2026/339',
          href: 'https://eur-lex.europa.eu/eli/reg_del/2026/339/oj'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'Article 3(3)(d) covers the internet-connected radio equipment defined by the act, including communication through other equipment. Article 3(3)(e) applies to specified categories capable of processing personal, traffic or location data; internet-connected equipment is one of those categories. Article 3(3)(f) concerns internet-connected equipment enabling money, monetary-value or virtual-currency transfers. Evaluate those capabilities and the act\'s exclusions instead of assuming all three apply to every switch.'
    },
    {
      type: 'paragraph',
      text: 'The Cyber Resilience Act has a separate phased timeline. For manufacturers and products within its scope, reporting duties for actively exploited vulnerabilities and severe security incidents began on 11 September 2026. Its main product obligations apply from 11 December 2027. A current RED review and preparation for the CRA are both relevant; the CRA is not yet fully applicable.',
      links: [
        {
          text: 'reporting duties',
          href: 'https://digital-strategy.ec.europa.eu/en/policies/cra-reporting'
        },
        {
          text: 'main product obligations',
          href: 'https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act'
        }
      ]
    },
    {
      type: 'callout',
      title: 'Scope check',
      text: 'Document the switch\'s internet path, processed data and relevant functions. A Wi-Fi radio test does not assess network protection, privacy safeguards or fraud-related requirements.'
    },
    {
      type: 'heading',
      text: 'Check the Assessment Route and Standards',
      id: 'why-so-many-people-get-ce-wrong'
    },
    {
      type: 'paragraph',
      text: 'A standard number tells you which technical method was used. Ask for the edition, covered requirements, tested operating modes and any exclusions. A standard or report does not provide a universal CE certificate.'
    },
    {
      type: 'paragraph',
      text: 'EN 18031-1, -2 and -3:2024 address different RED cybersecurity requirements. Their Official Journal references include restrictions, including password-related limitations. Applying a named part without checking those restrictions may leave a gap in the presumption of conformity.',
      links: [
        {
          text: 'Official Journal references',
          href: 'https://eur-lex.europa.eu/eli/dec_impl/2025/138/oj'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'RED Article 17 permits different conformity procedures. For Article 3(2) and relevant Article 3(3) requirements, not applying the cited harmonised standards in full, or lacking such standards, requires the Annex III or Annex IV route for those requirements, with notified-body involvement.',
      links: [
        {
          text: 'RED Article 17',
          href: 'https://eur-lex.europa.eu/eli/dir/2014/53/'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'For safety and EMC, choose standards relevant to the switch, loads and intended environment. Do not assume a module\'s radio report covers the mains circuit or the complete product\'s immunity and emissions.'
    },
    {
      type: 'paragraph',
      text: 'Use the current Official Journal references and transition dates when the product is assessed. A report against an older edition needs review; it is neither automatically unusable nor automatically sufficient.'
    },
    {
      type: 'heading',
      text: 'Define the Product before Commissioning Tests',
      id: 'choose-the-regulatory-path-first'
    },
    {
      type: 'paragraph',
      text: 'Give the assessor a complete specification and a representative sample. Missing functions or accessories can lead to an assessment scope that is too narrow.'
    },
    {
      type: 'list',
      items: [
        'Product boundary: wall switch, plug, receiver, module or equipment assembly; list any separately supplied power equipment.',
        'Electrical design: supply, wiring method, switched loads, protection and installation conditions.',
        'Radio design: every supported band, mode, antenna and simultaneous operating combination.',
        'Software and data: internet communication, accounts, data handled, security functions and update mechanism.',
        'Commercial roles: brand owner, legal manufacturer, importer and EU distribution countries.'
      ]
    },
    {
      type: 'paragraph',
      text: 'Agree which existing evidence can be reused and what finished-product assessment remains. Record the reasons rather than assuming that a pre-assessed module removes the need for product-level work.'
    },
    {
      type: 'heading',
      text: 'Related Products May Follow Different Legislation',
      id: 'different-product-types-need-different-paths'
    },
    {
      type: 'paragraph',
      text: 'A product name such as smart switch does not determine the complete legal scope.'
    },
    {
      type: 'list',
      items: [
        'Mechanical switches without radio: assess their product category, intended use and applicable electrical-product rules rather than copying a Wi-Fi file.',
        'Wired electronic switches without radio: evaluate applicable LVD and EMC scope for the actual equipment, including voltage limits and exclusions.',
        'Wi-Fi switches and plugs: assess the finished radio equipment under RED and any other applicable legislation, including RoHS.',
        'Products with several radios: include each mode and relevant simultaneous operation; one radio\'s report does not establish conformity of the whole combination.'
      ]
    },
    {
      type: 'paragraph',
      text: 'RoHS currently restricts ten substances. Supporting evidence needs to cover the product\'s relevant materials and components; verify any claimed exemption and its applicability rather than relying on a general supplier logo.',
      links: [
        {
          text: 'RoHS',
          href: 'https://environment.ec.europa.eu/topics/waste-and-recycling/rohs-directive_en'
        }
      ]
    },
    {
      type: 'heading',
      text: 'Review the File against the Shipped Version',
      id: 'what-a-complete-compliance-loop-looks-like'
    },
    {
      type: 'paragraph',
      text: 'Use a release review that links evidence to identifiers and configuration. It should make missing or mismatched items visible.'
    },
    {
      type: 'list',
      items: [
        'Applicable legislation and product-scope decisions are recorded.',
        'Risk assessment, design records and relevant test evidence describe the finished configuration.',
        'The EU Declaration of Conformity identifies the product and applicable acts, and is signed for the responsible manufacturer.',
        'Model identification, CE marking and required manufacturer/importer/operator details appear in the required locations.',
        'Instructions cover installation, intended loads, operation and required safety information in the destination languages.',
        'WEEE marking and relevant national producer obligations have been addressed.',
        'Any applicable RED cybersecurity assessment and current CRA reporting arrangements are identified.',
        'Changes to firmware, antennas, enclosure, components or loads are reviewed for their effect on conformity.'
      ]
    },
    {
      type: 'paragraph',
      text: 'WEEE marking and producer responsibilities need their own country-specific review. The crossed-out wheelie bin is not a substitute for registration, reporting or financing arrangements.',
      links: [
        {
          text: 'WEEE marking and producer responsibilities',
          href: 'https://europa.eu/youreurope/business/product-rules-compliance/recycling-waste-management/weee-label/index_en.htm'
        }
      ]
    },
    {
      type: 'heading',
      text: 'Allocate Responsibilities by Legal Role',
      id: 'who-is-actually-responsible'
    },
    {
      type: 'paragraph',
      text: 'The manufacturer is responsible for product conformity. A business that has a product made and markets it under its own name or trademark can be the manufacturer even when another company assembles it.',
      links: [
        {
          text: 'manufacturer',
          href: 'https://europa.eu/youreurope/business/product-rules-compliance/general-product-compliance/index_en.htm'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'Importers and distributors have their own duties to verify required conformity, identification and information. An authorised representative acts within a written mandate; using a lab or representative does not erase the other parties\' responsibilities.'
    },
    {
      type: 'paragraph',
      text: 'Assign who retains the records, answers authority requests and reviews product changes. Under RED, the manufacturer keeps the technical documentation and declaration for ten years after the equipment is placed on the market.'
    },
    {
      type: 'quote',
      text: 'A useful compliance file lets another reviewer identify the product, the applicable requirements and the evidence for each assessment.'
    },
    {
      type: 'heading',
      text: 'Official References to Keep with the Review',
      id: 'practical-reference-points'
    },
    {
      type: 'list',
      items: [
        'European Commission CE guidance: manufacturer declaration and the supporting assessment.',
        'RED 2014/53/EU: product scope, essential requirements and conformity procedures.',
        '2022/30 as amended, and 2026/339: current cybersecurity scope and repeal effective on 11 December 2027.',
        'Decision 2025/138 and the current harmonised-standard listings: EN 18031 references and restrictions.',
        'European Commission CRA guidance: reporting from 11 September 2026 and main obligations from 11 December 2027.',
        'RoHS, WEEE and Regulation 2019/1020 guidance: materials, waste-equipment duties and the EU economic-operator role.'
      ]
    },
  ],
  'cr2032-rf-remote-battery-life': [
    {
      type: 'paragraph',
      text: 'A coin-cell remote can draw almost no current between presses yet fail during transmission. Battery life has two separate limits: charge consumed over time and voltage available during a burst.'
    },
    {
      type: 'paragraph',
      text: 'When specifying a CR2032 remote, start with the usage pattern. Presses per day, time held down, temperature and the minimum operating voltage can change the replacement interval.'
    },
    {
      type: 'paragraph',
      text: 'Battery brand and quality matter, but a capacity figure cannot answer those questions alone. Obtain the datasheet for the actual cell and measure the completed remote.'
    },
    {
      type: 'paragraph',
      text: 'A credible life estimate needs a current profile and a pulse-voltage test. The first accounts for consumption; the second checks whether the remaining charge is usable by the radio.'
    },
    {
      type: 'image',
      src: illustratedBlogPhotos['cr2032-rf-remote-battery-life'].image,
      srcSet: illustratedBlogPhotos['cr2032-rf-remote-battery-life'].imageSrcSet,
      alt: 'Illustration: A coin cell and the open battery compartment of a remote',
      caption: 'Illustration of the article topic.'
    },
    {
      type: 'heading',
      text: 'Read the Capacity with Its Test Load',
      id: 'the-cr2032-is-not-a-miniature-power-bank'
    },
    {
      type: 'paragraph',
      text: 'CR2032 is a cell size and chemistry designation, not a promise of one fixed capacity under every load. Supplier ratings use specified conditions.'
    },
    {
      type: 'paragraph',
      text: 'A remote imposes a different load: long idle periods interrupted by encoding, radio transmission and LED indication. The cell must support that profile above the circuit’s operating threshold.'
    },
    {
      type: 'paragraph',
      text: 'Panasonic’s CR2032 datasheet lists 3 V nominal voltage, 225 mAh nominal capacity and 0.2 mA continuous drain. The continuous-drain entry is a reference condition, not a maximum permitted pulse current.',
      links: [
        {
          text: 'Panasonic’s CR2032 datasheet',
          href: 'https://energy.panasonic.com/dam/master/pdf/en/datasheet/lithium/CR2032_Datasheet_EN_240701.pdf'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'Using 225 mAh as an ideal charge budget shows how small the average current must be for multi-year operation. It does not establish that all 225 mAh will be available at the remote’s cutoff voltage.'
    },
    {
      type: 'list',
      items: [
        'Three years at 365 days/year is 26,280 hours; 225 mAh / 26,280 h ≈ 0.00856 mA = 8.56 µA.',
        'Five years is 43,800 hours; the same calculation gives about 5.14 µA.',
        'These ideal averages include every electrical load, but omit self-discharge and any loss of usable capacity under the real load and cutoff.'
      ]
    },
    {
      type: 'paragraph',
      text: 'Measure standby current at the battery terminals after the product has settled into its normal idle state. A low MCU sleep figure excludes the regulator, radio, LED paths and board leakage.'
    },
    {
      type: 'list',
      items: [
        'GPIO bias: check for enabled pull resistors that conduct continuously through a switch or external circuit.',
        'Debug and peripherals: confirm the production firmware enters the intended low-power mode.',
        'LED: integrate its current over the actual indication time, including a long press.',
        'Buttons: look for repeated wake-ups, stuck-key behavior or firmware that remains active after release.'
      ]
    },
    {
      type: 'callout',
      title: 'Measure the whole product',
      text: 'The battery supplies every branch on the PCB. Budget and measure total standby current, charge per command and minimum burst voltage; no single chip specification covers all three.'
    },
    {
      type: 'heading',
      text: 'Turn Usage into a Charge Budget',
      id: 'what-customers-ask-vs-what-engineering-gives-you'
    },
    {
      type: 'paragraph',
      text: 'Ask for a defined life estimate: cell model, operating temperature, idle current, presses per day, command duration and end-of-life criterion. A calendar-life number without those assumptions is incomplete.'
    },
    {
      type: 'paragraph',
      text: 'For a daily estimate, Qday = 24 × Isleep + N × Σ[(Ij − Isleep) × tj] / 3600. Use current in mA, each active-state duration tj in seconds, and N commands per day; the result is mAh/day. Subtracting Isleep avoids counting the same time twice.'
    },
    {
      type: 'paragraph',
      text: 'As a hypothetical example, 15 mA for 0.2 s is 0.000833 mAh per command before other active loads. At 20 commands/day that is about 6.08 mAh/year. A continuous 2 µA idle load adds 17.52 mAh/year. These are arithmetic inputs, not measured remote performance.'
    },
    {
      type: 'heading',
      text: 'Check Voltage During the Pulse',
      id: 'the-battery-is-not-just-a-bucket'
    },
    {
      type: 'paragraph',
      text: 'Energizer’s CR2032 datasheet rates 235 mAh typical at 21°C through 15 kΩ to 2.0 V. Its separate pulse curve uses 2-second, 400 Ω pulses 12 times/day on top of a continuous 15 kΩ background load. That is not a universal RF-remote load profile.',
      links: [
        {
          text: 'Energizer’s CR2032 datasheet',
          href: 'https://energizer.com/wp-content/uploads/2024/09/cr2032.pdf'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'An idle voltage measurement leaves out the most demanding interval. Capture voltage at the radio and MCU during wake-up, transmit and any repeated command sequence.'
    },
    {
      type: 'paragraph',
      text: 'Record the total current waveform rather than assuming a typical transmitter current. MCU startup, LEDs and other loads can overlap with the radio burst.'
    },
    {
      type: 'paragraph',
      text: 'The Nordic Semiconductor/Energizer pulse-load study explains why usable capacity depends on pulse magnitude, duration, recovery time and the circuit’s functional cutoff. A burst can cross that cutoff before the cell has exhausted all its charge.',
      links: [
        {
          text: 'Nordic Semiconductor/Energizer pulse-load study',
          href: 'https://devzone.nordicsemi.com/cfs-file/__key/support-attachments/beef5d1b77644c448dabff31668f3a47-5efe7ef27bdd4a7eb1a5fc7b38051495/High-pulse-drain-impact-on-CR2032-coin-cell-battery-capacity.pdf'
        }
      ]
    },
    {
      type: 'quote',
      text: 'Battery life ends when the product cannot meet its operating requirement, even if the cell retains charge.'
    },
    {
      type: 'paragraph',
      text: 'A first approximation to the immediate voltage drop is I × effective series resistance. Longer pulses also involve electrochemical polarization, so one fixed resistor does not fully model the cell.'
    },
    {
      type: 'paragraph',
      text: 'If the voltage falls below the MCU or RF requirements, the command may reset, lose timing or transmit incorrectly. A range complaint can therefore be a power-integrity symptom.'
    },
    {
      type: 'paragraph',
      text: 'Test new and partly discharged cells, cold conditions within the product rating, rapid presses and a held button. A new cell at room temperature is only one operating condition.'
    },
    {
      type: 'heading',
      text: 'Shorten Active Time without Breaking the Command',
      id: 'the-core-design-philosophy'
    },
    {
      type: 'quote',
      text: 'A completed command and prompt return to idle matter more than a low sleep figure in isolation.'
    },
    {
      type: 'paragraph',
      text: 'Measure wake-up, oscillator startup, encoding, RF activity, indication and return to sleep. The longest interval is not necessarily the largest contributor to charge.'
    },
    {
      type: 'list',
      items: [
        'Standby: turn off unused blocks while keeping the intended wake source available.',
        'Active period: finish the required frame and necessary repetitions before shutting down.',
        'Return to idle: verify that no timer, peripheral or held-button path keeps the system awake unintentionally.'
      ]
    },
    {
      type: 'heading',
      text: 'Use Chip Specs as Inputs, Not Product Guarantees',
      id: 'chip-selection-integration-matters'
    },
    {
      type: 'paragraph',
      text: 'The Si4010-C2 datasheet lists 10 nA typical standby with all GPIO floating or held high, at its stated DC test conditions. Its timer-only mode is 700 nA typical. These are distinct modes; neither value is a guarantee for an assembled remote.',
      links: [
        {
          text: 'Si4010-C2 datasheet',
          href: 'https://www.silabs.com/documents/public/data-sheets/Si4010.pdf'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'Choose the radio architecture for compatibility, current, wake-up time and supply range. Integration can simplify the circuit, but remaining external leakage and firmware behavior still need measurement.'
    },
    {
      type: 'heading',
      text: 'Configure GPIO for the Selected Device',
      id: 'gpio-configuration-can-decide-the-battery-life'
    },
    {
      type: 'paragraph',
      text: 'ST’s AN4899 explains that STM32 analog mode disables the digital input buffer. For unused pins, follow that device’s low-power guidance; for digital wake inputs, maintain a defined level. Do not apply one blanket “pull every pin high or low” rule to all modes and chips.',
      links: [
        {
          text: 'ST’s AN4899',
          href: 'https://www.st.com/resource/en/application_note/an4899-stm32-microcontroller-gpio-hardware-settings-and-lowpower-consumption-stmicroelectronics.pdf'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'A pull resistor can itself spend the idle budget when a switch or another device holds the opposite level. Check current paths, external pin voltages and back-powering, not just the register setting.'
    },
    {
      type: 'heading',
      text: 'Check Wake-Up and Held-Button Behavior',
      id: 'button-handling-false-wake-ups-are-a-silent-killer'
    },
    {
      type: 'paragraph',
      text: 'A button interrupt can avoid repeated polling, but it still needs an appropriate bias circuit and a wake mode supported by the MCU. Compare the complete current profile rather than assuming interrupts always use less energy.'
    },
    {
      type: 'paragraph',
      text: 'Mechanical bounce can generate multiple edges. Debounce and command handling should produce the intended behavior, including after a long hold or noisy contact, without repeatedly restarting transmission.'
    },
    {
      type: 'heading',
      text: 'Include RF Repetition in the Budget',
      id: 'rf-transmission-range-is-not-free'
    },
    {
      type: 'paragraph',
      text: 'Higher output settings, longer airtime and additional repeats can consume more charge per press. The actual increase depends on the radio, supply and firmware, and must be measured.'
    },
    {
      type: 'paragraph',
      text: 'Reducing repetitions indiscriminately can lower command success. Keep the receiver’s required timing and protocol; choose the repeat count from measured success and latency rather than battery arithmetic alone.'
    },
    {
      type: 'paragraph',
      text: 'For one-way remotes, repeated frames are usually sent without confirmation. ACK-based retries require a receiver in the handheld and a return link; they cannot be added to a transmitter-only design by a firmware label.'
    },
    {
      type: 'callout',
      title: 'Budget a complete command',
      text: 'Count all required frames, gaps, startup time and indication. Put a bounded policy on a held key, then verify command success and radio duty conditions with that policy.'
    },
    {
      type: 'heading',
      text: 'Account for the LED',
      id: 'leds-look-innocent-but-spend-real-energy'
    },
    {
      type: 'paragraph',
      text: 'Measure LED current and on-time. Its average contribution is small only if its total charge per command is small relative to the rest of the profile.'
    },
    {
      type: 'paragraph',
      text: 'For illustration, 2 mA for 300 ms costs 0.000167 mAh; reducing that to 30 ms cuts this particular contribution tenfold. Check that the shorter indication remains useful and that the firmware implements the intended timing.'
    },
    {
      type: 'heading',
      text: 'Check the Hardware and Firmware Together',
      id: 'it-is-a-system-not-a-single-fix'
    },
    {
      type: 'paragraph',
      text: 'A reservoir capacitor may reduce a short pulse’s voltage dip, but sizing depends on pulse charge, allowed droop and the cell’s recharge path. Capacitor leakage and ESR also matter at microamp standby levels.'
    },
    {
      type: 'paragraph',
      text: 'Do not use an ideal capacitance calculation as evidence of service life. Verify the supply waveform with the real cell, capacitor, layout and repeated-command pattern.'
    },
    {
      type: 'list',
      items: [
        'Cell: select the documented chemistry, supplier and capacity test conditions.',
        'Current: measure total standby and charge per complete command.',
        'GPIO: inspect bias, external drive and low-power settings for the actual MCU.',
        'Firmware: test bounce, long hold, repeated commands and return to sleep.',
        'Radio: retain required framing, repetitions and applicable duty conditions.',
        'LED and peripherals: include their currents and timings.',
        'Power integrity: check burst voltage at MCU and radio pins with relevant cells and temperatures.',
        'Board: investigate contamination, unintended leakage and battery-contact resistance.',
        'End point: define the minimum voltage and required command performance for replacement.'
      ]
    },
    {
      type: 'paragraph',
      text: 'Retain the waveform and assumptions with the life estimate. A supplier can then explain whether a shorter interval comes from changed usage, standby leakage or pulse-voltage failure.'
    },
    {
      type: 'heading',
      text: 'Define When the Battery Needs Replacing',
      id: 'hardware-longevity-is-trust'
    },
    {
      type: 'paragraph',
      text: 'Choose an end point tied to actual operation: supply minimum, command-success requirement or a documented low-battery indication. The battery datasheet’s cutoff may differ from the product’s.'
    },
    {
      type: 'paragraph',
      text: 'If a low-battery warning is included, test it with a realistic pulse load. An unloaded voltage threshold can miss a cell that collapses during transmission.'
    },
    {
      type: 'paragraph',
      text: 'Verify both the final command and the warning behavior near that end point, including after recovery from several presses.'
    },
    {
      type: 'paragraph',
      text: 'A calendar estimate should state its assumptions and uncertainty. It should not imply that all users, cell lots and temperatures produce the same replacement interval.'
    },
    {
      type: 'paragraph',
      text: 'For buyers, the strongest answer is a measured profile, a defined usage model and evidence that the burst voltage remains adequate over the planned service interval.'
    },
    {
      type: 'heading',
      text: 'Primary Documents Used Here',
      id: 'references'
    },
    {
      type: 'list',
      items: [
        'Panasonic CR2032: nominal capacity and continuous reference drain.',
        'Energizer CR2032: capacity conditions and a specified background-plus-pulse curve.',
        'Nordic Semiconductor/Energizer study: pulse-voltage effects and functional cutoff.',
        'Silicon Labs Si4010-C2: mode-specific typical currents and GPIO conditions.',
        'STMicroelectronics AN4899: device-specific GPIO and low-power configuration.'
      ]
    },
  ],
  'circuits-dont-act-good-enough-transmitter-modules': [
    {
      type: 'image',
      src: illustratedBlogPhotos['circuits-dont-act-good-enough-transmitter-modules'].image,
      srcSet: illustratedBlogPhotos['circuits-dont-act-good-enough-transmitter-modules'].imageSrcSet,
      alt: 'Illustration: A compact generic radio module photographed close up',
      caption: 'Illustration of the article topic.'
    },
    {
      type: 'image',
      src: '/images/blog/circuits-dont-act/circuits-dont-act-cover-reviewed.webp',
      alt: 'Concept illustration of transmitter supply, carrier and spectrum checks',
      caption: 'Concept illustration for transmitter evaluation. It does not show measurements or a product test result.'
    },
    {
      type: 'paragraph',
      text: 'A transmitter sample can open a gate nearby and still fail the requirements of the finished product. That test confirms the receiver accepted the tested command; it does not establish frequency margin, emissions or production consistency.'
    },
    {
      type: 'paragraph',
      text: 'The purchasing question is what happens when the battery, temperature, enclosure and component tolerances change.'
    },
    {
      type: 'paragraph',
      text: 'Evaluate the transmitter with its intended receiver and antenna. Use bench measurements to isolate frequency and output problems, then use site tests to establish command performance.'
    },
    {
      type: 'paragraph',
      text: 'The frequency reference, output network and antenna interact. A parts photograph shows their presence, but cannot establish their values, tolerances or performance.'
    },
    {
      type: 'list',
      items: [
        'Does the carrier and modulation remain compatible with the receiver over the operating range?',
        'Does the assembled product meet its output and unwanted-emission requirements?',
        'Do multiple samples meet the same limits using a documented test method?'
      ]
    },
    {
      type: 'paragraph',
      text: 'This guide connects those questions to the evidence a buyer can request: component requirements, RF measurements, sample variation and control of substitutions.'
    },
    {
      type: 'quote',
      text: 'One successful sample is a functional check. Repeatability needs measurements from more than one sample.'
    },
    {
      type: 'paragraph',
      text: 'Begin with a defined acceptance condition: receiver model, waveform, supply range, antenna, enclosure, operating environment and required command response.'
    },
    {
      type: 'paragraph',
      text: 'Compare samples using the same receiver and test setup. Record hardware revisions, attempt counts and missed commands rather than treating similar housings or frequency labels as equivalent.'
    },
    {
      type: 'paragraph',
      text: 'If a sample fails, keep the failing condition reproducible. The symptom “short range” can originate in output, carrier offset, antenna loss, power integrity or reception.'
    },
    {
      type: 'paragraph',
      text: 'Assign separate limits to those measurements. A radio spectrum, an antenna impedance plot and a range result answer different questions.'
    },
    {
      type: 'callout',
      title: 'Request evidence for each limit',
      text: 'Frequency accuracy, output level, occupied spectrum and command success require their own test conditions. A clean-looking board does not substitute for those results.'
    },
    {
      type: 'heading',
      text: 'Check the Frequency Reference',
      id: 'the-crystal-is-not-a-small-part-it-is-the-rhythm-of-the-whole-system'
    },
    {
      type: 'paragraph',
      text: 'Identify how the transmitter generates its carrier: a crystal-referenced synthesizer, a SAW-based circuit or another architecture. A metal component package alone does not identify the function.'
    },
    {
      type: 'paragraph',
      text: 'Some transmitter ICs use an internal calibrated reference. An external crystal is therefore not a universal requirement for a reliable remote.',
      links: [
        {
          text: 'internal calibrated reference',
          href: 'https://www.silabs.com/documents/public/data-sheets/Si4010.pdf'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'In a crystal-referenced synthesizer, error in the reference shifts the RF carrier. The receiver’s own frequency error adds to the relative offset the link must tolerate.'
    },
    {
      type: 'paragraph',
      text: 'Initial tolerance, capacitive loading, temperature and aging belong in that error budget. They cannot be replaced by the nominal frequency printed on the crystal.'
    },
    {
      type: 'image',
      src: '/images/blog/circuits-dont-act/crystal-sets-the-rhythm.webp',
      alt: 'Concept illustration of a crystal reference and load capacitors',
      caption: 'Crystal-reference concept. Clock architecture, load capacitance and component values depend on the selected radio.'
    },
    {
      type: 'paragraph',
      text: 'TI’s frequency-offset note shows sensitivity degrading as transmitter and receiver frequencies separate. The tolerable offset depends on signal bandwidth and receive settings.',
      links: [
        {
          text: 'TI’s frequency-offset note',
          href: 'https://www.ti.com/lit/an/swra122d/swra122d.pdf'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'A close-range test can conceal offset because a strong received signal may still decode. Measure carrier offset directly and repeat the receive test at lower input levels.'
    },
    {
      type: 'paragraph',
      text: 'Also distinguish carrier accuracy from data timing. Some products derive both from one reference; others use separate timing sources. The receiver must accept both.'
    },
    {
      type: 'paragraph',
      text: 'For a crystal-based design, request the exact part specification and oscillator requirements from the radio IC datasheet.'
    },
    {
      type: 'list',
      items: [
        'Nominal frequency: use the radio’s required reference frequency and operating mode.',
        'Total accuracy: budget initial tolerance, load error, temperature drift and aging at both ends.',
        'Load capacitance: check the crystal’s specified CL against the oscillator and board parasitics.',
        'Oscillator limits: confirm ESR, drive level and startup requirements for the selected IC.',
        'Verification: measure startup and carrier frequency across representative supply and temperature conditions.'
      ]
    },
    {
      type: 'paragraph',
      text: 'For a simple two-capacitor oscillator, the effective load includes their series combination plus stray capacitance. CL is not normally the value to copy into each capacitor; use the IC’s design method.'
    },
    {
      type: 'paragraph',
      text: 'Component substitution can change tolerance, ESR or load requirement while leaving the nominal marking unchanged. A substitute should be checked against the oscillator specification and measured on the product.'
    },
    {
      type: 'heading',
      text: 'Separate Output Matching from Antenna Matching',
      id: 'the-matching-circuit-solves-one-real-problem-is-the-energy-being-wasted'
    },
    {
      type: 'paragraph',
      text: 'A matching network transforms the impedance presented to the radio and antenna. It can also include a balun, filtering or DC blocking, depending on the output architecture.'
    },
    {
      type: 'paragraph',
      text: 'Do not assume every chip output is a 50 Ω port. Follow the radio’s specified load and reference network before choosing the antenna-feed measurement point.'
    },
    {
      type: 'list',
      items: [
        'Mismatch can reflect part of the incident power at an interface.',
        'Network components and feedlines can dissipate power.',
        'Antenna inefficiency can reduce radiated power even when the input match looks good.'
      ]
    },
    {
      type: 'paragraph',
      text: 'Enclosure or hand proximity can change the antenna impedance and pattern. A change in range after assembly is a reason to measure those effects, not proof of one particular matching fault.'
    },
    {
      type: 'image',
      src: '/images/blog/circuits-dont-act/matching-delivers-energy.webp',
      alt: 'Concept illustration of the output matching network and antenna',
      caption: 'Matching-network concept, not a reusable schematic. The radio output impedance, PCB and final antenna determine the design.'
    },
    {
      type: 'paragraph',
      text: 'Ground return, component placement and RF trace geometry affect the network. Keep the reference layout’s critical geometry and use the actual PCB stackup when evaluating changes.'
    },
    {
      type: 'paragraph',
      text: 'Copying the reference design is a useful starting point if the stated materials, dimensions and component packages are retained. It does not validate a different board or antenna automatically.'
    },
    {
      type: 'paragraph',
      text: 'TI’s antenna matching guide recommends checking the final enclosure and in-hand condition for portable devices. Tuning an exposed board alone leaves the normal use condition unresolved.',
      links: [
        {
          text: 'TI’s antenna matching guide',
          href: 'https://www.ti.com/lit/an/swra726/swra726.pdf'
        }
      ]
    },
    {
      type: 'callout',
      title: 'Provide a defined tuning interface',
      text: 'Retain appropriate matching footprints and a measurement access point, following the radio design. Calibrate measurements at the chosen reference plane before adjusting values.'
    },
    {
      type: 'list',
      items: [
        'Conducted output into the specified load.',
        'Antenna impedance with the enclosure and relevant grip.',
        'Radiated performance and command success in intended orientations.',
        'Fundamental, harmonic and other unwanted emissions.',
        'Supply current and voltage during a complete command.'
      ]
    },
    {
      type: 'paragraph',
      text: 'A low-reflection antenna is not necessarily efficient: a lossy network can also look well matched. Check radiation or a controlled link result as well as impedance.'
    },
    {
      type: 'heading',
      text: 'Measure Unwanted Emissions',
      id: 'filtering-is-actually-about-boundaries'
    },
    {
      type: 'paragraph',
      text: 'A transmitter must be evaluated beyond its carrier peak. Harmonics, modulation sidebands, oscillator leakage and switching transients can all matter to the applicable emission limits.'
    },
    {
      type: 'paragraph',
      text: 'The intended modulated signal needs enough occupied bandwidth to carry its data. A filter should preserve that waveform while attenuating unwanted frequency components.'
    },
    {
      type: 'paragraph',
      text: 'Harmonics occur at integer multiples of the carrier. Other peaks may be spurious signals, intermodulation or external interference; they should not all be labelled harmonics.'
    },
    {
      type: 'image',
      src: '/images/blog/circuits-dont-act/filtering-protects-boundary-reviewed.webp',
      alt: 'Conceptual frequency components showing a fundamental and its second and third harmonics',
      caption: 'Frequency-component concept: harmonics occur at 2f0, 3f0 and further integer multiples. These are not plotted measurements; filtering and compliance require tests on the actual product.'
    },
    {
      type: 'paragraph',
      text: 'For a 433.92 MHz fundamental, the second and third harmonics are 867.84 MHz and 1301.76 MHz. Those are calculated frequencies, not measurements from the illustrations.'
    },
    {
      type: 'paragraph',
      text: 'Applicable radio tests specify detector, bandwidth, distance or RF reference point and operating mode. A spectrum-analyzer screenshot without those settings is not evidence of compliance.',
      links: [
        {
          text: 'Applicable radio tests',
          href: 'https://www.govinfo.gov/content/pkg/CFR-2024-title47-vol1/pdf/CFR-2024-title47-vol1-sec15-231.pdf'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'Check both conducted and radiated results where the requirements call for them. Output-network filtering cannot establish the emissions of the antenna, board and enclosure by itself.'
    },
    {
      type: 'paragraph',
      text: 'A filter adds insertion loss and can affect waveform bandwidth. Choose it for the required passband and rejection, then measure fundamental output and unwanted emissions together.'
    },
    {
      type: 'paragraph',
      text: 'The measured result should include the normal command and relevant repetition behavior. A continuous unmodulated carrier alone can miss switching or modulation effects.'
    },
    {
      type: 'heading',
      text: 'Trace the Complete Signal Chain',
      id: 'the-real-beginner-mistake-is-looking-at-one-component-not-the-whole-chain'
    },
    {
      type: 'paragraph',
      text: 'If range changes after a board or enclosure revision, compare the changed hardware under the same test conditions before assigning the cause.'
    },
    {
      type: 'paragraph',
      text: 'Several changes may act together: supply impedance shifts output; carrier offset changes receiver response; the enclosure changes antenna loading.'
    },
    {
      type: 'list',
      items: [
        'Supply: maintains voltage through startup and transmission.',
        'Frequency reference: keeps the carrier within the receiver’s supported offset.',
        'Encoder/modulator: produces the correct framing and timing.',
        'Output network: presents the required load and filtering.',
        'Antenna: radiates with the intended efficiency and pattern.',
        'PCB: provides the specified geometry, stackup and return paths.',
        'Enclosure and installation: define the actual antenna environment.'
      ]
    },
    {
      type: 'paragraph',
      text: 'Do not infer FR4 grade, component authenticity or solder quality from board color or a rendered photograph. Request the stackup, BOM requirements and relevant inspection or measurement records.',
      links: [
        {
          text: 'stackup',
          href: 'https://www.ti.com/lit/an/swra726/swra726.pdf'
        }
      ]
    },
    {
      type: 'heading',
      text: 'Test Function, Performance and Variation Separately',
      id: 'from-usable-to-good-to-repeatable-are-three-different-levels'
    },
    {
      type: 'paragraph',
      text: 'Functional testing establishes that the receiver accepts the command and produces the intended output.'
    },
    {
      type: 'paragraph',
      text: 'Performance testing establishes margins under defined supply, temperature, orientation and interference conditions, with a stated response criterion.'
    },
    {
      type: 'paragraph',
      text: 'Variation testing applies the same limits to multiple units and lots. Choose sample size and coverage based on the production risk rather than one attractive demonstration.'
    },
    {
      type: 'quote',
      text: 'Use the same limits and fixtures when comparing production samples with the approved design.'
    },
    {
      type: 'paragraph',
      text: 'Keep results identifiable by sample and hardware revision. Otherwise a good average can hide a failing unit, or a changed revision can be mistaken for normal variation.'
    },
    {
      type: 'heading',
      text: 'Choose Conditions That Expose Weak Margin',
      id: 'truly-advanced-design-leaves-margin-for-imperfection'
    },
    {
      type: 'paragraph',
      text: 'Nominal room-temperature testing is a starting point. Extend it to the operating conditions the product is expected to meet.'
    },
    {
      type: 'paragraph',
      text: 'At supply limits, measure RF output, frequency, command timing and reset behavior. Do not exceed the device’s recommended operating range to explore an unspecified claim.'
    },
    {
      type: 'paragraph',
      text: 'At temperature limits, allow the sample to settle and use the intended battery or a documented battery model. A bench supply can hide coin-cell pulse problems.'
    },
    {
      type: 'paragraph',
      text: 'For the final enclosure, compare representative grips and orientations. Mounting fixtures and test cables can themselves alter the antenna result.'
    },
    {
      type: 'quote',
      text: 'Margin should be visible in the measurements at the required operating conditions.'
    },
    {
      type: 'paragraph',
      text: 'Avoid a universal pass margin invented for every product. Establish limits from receiver compatibility, site requirements and the applicable radio rules.'
    },
    {
      type: 'heading',
      text: 'Control Changes after Sample Approval',
      id: 'so-now-when-i-look-at-a-transmitter-module-i-look-for-long-term-thinking'
    },
    {
      type: 'paragraph',
      text: 'Record which crystal, RF passives, antenna geometry, stackup and firmware formed the approved sample. A nominally equivalent replacement may change oscillator or RF behavior.'
    },
    {
      type: 'paragraph',
      text: 'When a supplier proposes a substitution, identify which measurements can be affected and repeat those checks on the assembled product.'
    },
    {
      type: 'paragraph',
      text: 'This does not mean every component change needs every test. It means the verification should follow the physical role of the change and the existing authorization requirements.'
    },
    {
      type: 'list',
      items: [
        'Frequency-reference change: check startup, drift and receiver offset tolerance.',
        'RF passive or package change: check matching, output and unwanted emissions.',
        'PCB stackup or layout change: recheck the RF network and antenna.',
        'Enclosure or antenna change: check installed impedance, radiation and command performance.',
        'Firmware timing change: check framing, repeats, latency, current and radio duty conditions.'
      ]
    },
    {
      type: 'heading',
      text: 'Keep the Measurements Reviewable',
      id: 'in-the-end-circuits-are-not-about-being-smart-they-are-about-being-honest'
    },
    {
      type: 'paragraph',
      text: 'For RF plots, keep the frequency span, detector, resolution bandwidth, calibration, supply and operating mode with the result. Identify the sample, not just the module family.'
    },
    {
      type: 'paragraph',
      text: 'For range results, keep the receiver, antennas, enclosure, path and successful/attempted command counts. A photograph of an analyzer or open gate is not a test record.'
    },
    {
      type: 'paragraph',
      text: 'For a claimed authorization or test report, confirm that the model, variant and antenna configuration correspond to the product being offered.'
    },
    {
      type: 'heading',
      text: 'What to Resolve Before a Volume Order',
      id: 'a-good-transmitter-module-is-reliability-compressed-into-a-circuit'
    },
    {
      type: 'paragraph',
      text: 'Agree the hardware revision and acceptance conditions in writing. Define which sample represents the product and how a supplier will communicate material changes.'
    },
    {
      type: 'paragraph',
      text: 'Resolve any sample failure with a repeatable before/after comparison. Record the actual correction rather than accepting a general statement that the RF was “optimized.”'
    },
    {
      type: 'paragraph',
      text: 'Choose the production checks from the faults they can detect. A close-range button test may catch assembly failure while missing frequency drift or insufficient antenna performance.'
    },
    {
      type: 'paragraph',
      text: 'If testing cannot resolve a requirement, identify the missing evidence. Do not turn an untested assumption into a promised range, battery interval or compliance claim.'
    },
    {
      type: 'paragraph',
      text: 'This gives the buyer a concrete basis for comparing quotations: the specified design, measured margins, accepted variation and change process.'
    },
    {
      type: 'paragraph',
      text: 'When sending a transmitter problem for review, include the receiver model, product revision, supply condition, enclosure, failure path and any measured frequency/output difference. Those facts narrow the next test.'
    },
  ],
  'oem-odm-hardware-future': [
    {
      type: 'image',
      src: illustratedBlogPhotos['oem-odm-hardware-future'].image,
      srcSet: illustratedBlogPhotos['oem-odm-hardware-future'].imageSrcSet,
      alt: 'Illustration: Unbranded remote packaging with a paper insert and blank instruction sheet',
      caption: 'Illustration of the article topic.'
    },
    {
      type: 'quote',
      text: 'Before choosing OEM or ODM, agree who designs each part, what will be delivered and who can change or use it later.'
    },
    {
      type: 'paragraph',
      text: 'An RF remote project can combine a supplier\'s existing radio design with a new housing, buyer-defined firmware and custom packaging. Calling that project OEM or ODM does not describe the whole scope.'
    },
    {
      type: 'paragraph',
      text: 'To compare offers, write down the required receiver compatibility, product changes and engineering deliverables. Then ask each supplier which parts of the work it owns and which assumptions its price depends on.'
    },
    {
      type: 'paragraph',
      text: 'The diagrams below show common sourcing arrangements and possible risks. They do not establish ownership, cost, schedule or compliance for a particular project.'
    },
    {
      type: 'image',
      src: '/images/blog/oem-odm-hardware-future/oem-vs-odm-path-reviewed.webp',
      alt: 'Illustration of buyer-specified production and supplier-design sourcing arrangements',
      caption: 'Common sourcing arrangements are shown schematically. Design responsibility, ownership and delivery scope must be agreed for the project.'
    },
    {
      type: 'heading',
      text: 'Define the Design and Manufacturing Scope',
      id: 'oem-and-odm-are-not-the-same-business-path'
    },
    {
      type: 'paragraph',
      text: 'In sourcing discussions, OEM often means manufacturing to a buyer-specified design, while ODM often means starting from a design supplied by the manufacturer. Suppliers use the terms differently, so confirm what they mean in the proposal.'
    },
    {
      type: 'list',
      items: [
        'Buyer-specified production: identify the drawings, firmware, BOM and acceptance criteria supplied by the buyer, plus any engineering work assigned to the supplier.',
        'Supplier-design development: identify the existing platform, permitted modifications, engineering deliverables and rights to use or modify them.'
      ]
    },
    {
      type: 'paragraph',
      text: 'Design responsibility and IP ownership are separate questions. WIPO\'s supplier IP guidance distinguishes existing background IP from new project results and recommends explicit ownership and access terms. The OEM or ODM label does not answer those questions.',
      links: [
        {
          text: 'supplier IP guidance',
          href: 'https://www.wipo.int/en/web/ip-commercialization/w/blog/ip-agreements-with-suppliers-what-ventures-need-to-know'
        }
      ]
    },
    {
      type: 'callout',
      title: 'Put the scope in writing',
      text: 'Specify design inputs, engineering outputs, production responsibilities, acceptance criteria and usage rights. Compare those commitments across offers.'
    },
    {
      type: 'paragraph',
      text: 'This matters even for a small order. A logo change may need little engineering, while a protocol change can affect firmware, receiver compatibility and testing despite using the same shell.'
    },
    {
      type: 'heading',
      text: 'Check Whether the Design Is Exclusive',
      id: 'the-hidden-risk-of-odm-is-competing-against-the-same-design'
    },
    {
      type: 'paragraph',
      text: 'A catalog design may be offered to several customers. If exclusivity matters, ask what it covers: a housing, firmware feature, territory, customer segment or complete product.'
    },
    {
      type: 'paragraph',
      text: 'Similar-looking products do not prove that a supplier breached an agreement. Compare what was reserved for your project with what the supplier remains permitted to supply elsewhere.'
    },
    {
      type: 'paragraph',
      text: 'For custom work, specify ownership or licensing of the new results, access to design files and the right to use another manufacturer. Paying a development charge should not leave those rights implied.'
    },
    {
      type: 'image',
      src: '/images/blog/oem-odm-hardware-future/hidden-risk-of-odm.webp',
      alt: 'Illustration of a shared catalog design appearing under several hypothetical brands',
      caption: 'Illustrative brands and prices show a possible non-exclusive catalog scenario; they are not market evidence. Check the project\'s actual exclusivity and usage terms.'
    },
    {
      type: 'heading',
      text: 'Assign Compliance Work to the Actual Product',
      id: 'rf-remotes-add-one-more-layer-certification'
    },
    {
      type: 'paragraph',
      text: 'The destination market and product configuration determine the radio requirements to assess. An existing platform\'s documents can be useful, but need to be checked against the model and changes you will sell.'
    },
    {
      type: 'list',
      items: [
        'Identify the destination markets and intended application.',
        'Check the applicable radio and other product requirements for the final configuration.',
        'Assign responsibility for testing, documentation, labels and instructions.',
        'Agree how design changes will be reviewed against the evidence.'
      ]
    },
    {
      type: 'paragraph',
      text: 'Ask the lab or responsible party for a scope and quote after the design is defined. Do not assume a standard cost or duration. A frequency, antenna, enclosure or firmware change may need assessment; it does not follow that every change requires a complete new approval.'
    },
    {
      type: 'image',
      src: '/images/blog/oem-odm-hardware-future/rf-compliance-matters-reviewed.webp',
      alt: 'Illustration of radio-product assessment planning across destination markets',
      caption: 'Identify the applicable requirements and evidence for the final product and market. The required process cannot be inferred from a generic SRRC, CE or FCC label.'
    },
    {
      type: 'paragraph',
      text: 'Using a supplier design does not remove the brand owner\'s responsibilities. Your Europe defines a manufacturer to include someone who has a product designed or made and markets it under their own name or trademark. Agree who prepares the required evidence and keeps it available.',
      links: [
        {
          text: 'Your Europe',
          href: 'https://europa.eu/youreurope/business/product-rules-compliance/general-product-compliance/index_en.htm'
        }
      ]
    },
    {
      type: 'callout',
      title: 'Review documents before scheduling',
      text: 'Check the model, configuration and responsible party named in existing reports or declarations. Put any missing work into the project schedule before committing a launch date.'
    },
    {
      type: 'heading',
      text: 'Choose the Authentication Requirement',
      id: 'fixed-code-and-rolling-code-are-not-just-technical-details'
    },
    {
      type: 'paragraph',
      text: 'For a remote that operates a gate or garage, specify the receiver family and the required credential behavior before selecting a platform. Compatibility and access security must both be addressed.'
    },
    {
      type: 'list',
      items: [
        'A repeated static identifier does not provide freshness protection against a matching replay.',
        'A rolling-code design must authenticate changing values with compatible receiver checks; its security also depends on key handling and implementation.',
        'Receiver enrollment is a registration method used by different code systems, not a separate security class.'
      ]
    },
    {
      type: 'image',
      src: '/images/blog/oem-odm-hardware-future/fixed-code-vs-rolling-code-reviewed.webp',
      alt: 'Illustration comparing repeated identifiers with changing authenticated messages',
      caption: 'Static-code replay protection differs from authenticated changing-message validation. The receiver\'s implementation and credential management determine the system\'s protection.'
    },
    {
      type: 'paragraph',
      text: 'Microchip\'s AN661 example checks transmitter credentials and synchronization state before activating an output. A changing message alone is not enough. Ask for the supported system and the relevant behavior, rather than approving a product from a rolling-code label.',
      links: [
        {
          text: 'AN661 example',
          href: 'https://ww1.microchip.com/downloads/en/Appnotes/00661C.pdf'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'Agree how remotes are added and removed, including when one is lost. These functions affect suitability for a shared site as much as the button count or housing appearance.'
    },
    {
      type: 'heading',
      text: 'Choose by the Work You Need',
      id: 'choose-by-stage-not-by-vocabulary'
    },
    {
      type: 'paragraph',
      text: 'Use the proposed scope, available engineering resources and test results to choose a supplier arrangement. The label does not establish which route is faster or safer.'
    },
    {
      type: 'list',
      items: [
        'For an existing design, check receiver support and how much modification is required.',
        'For a custom protocol or receiver, identify who will design and validate both ends of the link.',
        'For a new housing, assign tooling, RF retesting and mechanical acceptance work.',
        'For safety-related use, assess the complete system and required evidence rather than treating OEM as a safety guarantee.'
      ]
    },
    {
      type: 'paragraph',
      text: 'Change control belongs in both arrangements. Identify substitutions and revisions that require notice, approval and revalidation, especially firmware, key components, antenna, housing and radio settings.'
    },
    {
      type: 'heading',
      text: 'Use Acceptance Milestones',
      id: 'do-not-use-a-next-stage-solution-too-early'
    },
    {
      type: 'paragraph',
      text: 'Approve the requirements before the design, and approve the tested sample before production. Each milestone should have a deliverable and a decision criterion.'
    },
    {
      type: 'paragraph',
      text: 'If a supplier platform needs substantial modification, compare its remaining engineering work with a new design. Existing hardware saves time only where it already satisfies the actual requirement.'
    },
    {
      type: 'quote',
      text: 'Choose the scope you can fund, verify and support, with an agreed path for changes after launch.'
    },
    {
      type: 'heading',
      text: 'Plan for Maintenance and Transfer',
      id: 'supply-chain-sovereignty-is-the-real-decision'
    },
    {
      type: 'paragraph',
      text: 'A license can permit use of IP without transferring ownership. WIPO\'s technology-transfer guidance distinguishes licensing from assignment. If future manufacturing transfer matters, verify that the rights and technical deliverables support it.',
      links: [
        {
          text: 'technology-transfer guidance',
          href: 'https://www.wipo.int/en/web/technology-transfer/agreements'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'Ask what is delivered if the relationship ends: manufacturing files, firmware binaries or source where agreed, programming instructions, fixtures and test limits. Also identify supplier technology that remains unavailable.'
    },
    {
      type: 'paragraph',
      text: 'Owning a drawing is not enough to maintain a product if the programming tool, secure provisioning process or test fixture is missing. Treat these dependencies as part of the delivery and support scope.'
    },
    {
      type: 'paragraph',
      text: 'A useful proposal review asks four questions: who designs, who approves changes, what evidence is delivered, and what can the buyer do without the supplier later?'
    },
    {
      type: 'paragraph',
      text: 'Resolve those questions before choosing the OEM or ODM label. The result should be a defined product and a reviewable agreement, rather than a promise of control or speed.'
    },
  ],
  'rf-remote-control-concurrency-anti-collision': [
    {
      type: 'image',
      src: illustratedBlogPhotos['rf-remote-control-concurrency-anti-collision'].image,
      srcSet: illustratedBlogPhotos['rf-remote-control-concurrency-anti-collision'].imageSrcSet,
      alt: 'Illustration: Several separate handheld remotes and one receiver on a bench',
      caption: 'Illustration of the article topic.'
    },
    {
      type: 'quote',
      text: 'A different remote address does not reserve a different radio channel.'
    },
    {
      type: 'paragraph',
      text: 'Two remotes may work separately and miss commands when pressed together. Before changing code or transmit power, check whether their frames overlap at the receiver.'
    },
    {
      type: 'paragraph',
      text: 'Receivers respond to signals arriving within their bandwidth, including traffic intended for other devices. Address checking happens after enough of a frame has been recovered; it does not prevent RF overlap.'
    },
    {
      type: 'paragraph',
      text: 'The available remedy depends on hardware. A transmitter-only handheld cannot listen for a clear channel or receive an acknowledgment. A transceiver can support those functions if the protocol implements them.'
    },
    {
      type: 'callout',
      title: 'Identify the link direction first',
      text: 'For a one-way remote, evaluate airtime, bounded repetitions and receiver duplicate handling. For a two-way system, also evaluate channel assessment, acknowledgments, retry limits and the return path.'
    },
    {
      type: 'heading',
      text: 'What Happens at the Receiver',
      id: 'what-a-collision-actually-is'
    },
    {
      type: 'paragraph',
      text: 'Radio waves do not crash into one another in the air. They superimpose at the receive antenna; the receiver must recover its wanted waveform from the combined input.'
    },
    {
      type: 'paragraph',
      text: 'A simplified signal-quality measure is SINR = S/(I + N), with desired signal S, interference I and noise N expressed as linear powers at the same reference point and bandwidth. Do not add dBm values in this equation.'
    },
    {
      type: 'paragraph',
      text: 'Overlapping traffic can corrupt a frame, but not every overlap loses both signals. A stronger signal may be captured, depending on the receiver, timing, modulation and power difference.'
    },
    {
      type: 'image',
      src: '/images/blog/rf-remote-control-concurrency-anti-collision/collision-scenarios-reviewed.webp',
      alt: 'Concept illustration of overlapping remote frames at one receiver',
      caption: 'Overlapping signals combine at the receiver. One-way handhelds have no ACK/NAK path; feedback needs receive-capable hardware and a return transmission.'
    },
    {
      type: 'list',
      items: [
        'Co-channel overlap: transmissions arrive within the same receive channel during overlapping time. Different addresses do not avoid it.',
        'Adjacent-channel or out-of-band interference: filtering, transmitter spectrum and receiver dynamic range can allow nearby-frequency signals to impair reception.',
        'Hidden nodes: two transmitters cannot hear each other but both reach one receiver. Even a listening transmitter can therefore decide its local channel is clear while a collision occurs elsewhere.'
      ]
    },
    {
      type: 'heading',
      text: 'Define the Consequence of a Missed Command',
      id: 'consumer-remotes-and-industrial-remotes-have-different-collision-tolerances'
    },
    {
      type: 'paragraph',
      text: 'For a simple light-control remote, a retry may be acceptable. Specify the required response time and how the user knows whether the command took effect.'
    },
    {
      type: 'paragraph',
      text: 'For moving machinery or access equipment, radio loss has to be handled by the complete control system. Define the safe state, timeout and permitted recovery with the equipment requirements.'
    },
    {
      type: 'paragraph',
      text: 'A hobby radio protocol does not become safety-rated by adding ACKs. Verify the controller’s behavior after missing, delayed, repeated or out-of-order commands as well as its independent safety functions.'
    },
    {
      type: 'heading',
      text: 'Choose Coordination the Hardware Can Support',
      id: 'collision-avoidance-is-resource-partitioning'
    },
    {
      type: 'paragraph',
      text: 'Frequency separation, time scheduling, hopping, spreading and carrier sensing solve different parts of coexistence. They are not interchangeable firmware options for a fixed-frequency transmitter-only remote.'
    },
    {
      type: 'list',
      items: [
        'FDMA: assign separate frequency channels and provide enough receiver selectivity.',
        'TDMA: assign transmit windows with synchronization and guard time.',
        'FHSS: coordinate frequency changes between compatible radios.',
        'DSSS: use a spreading code and matched receiver processing; spreading alone does not schedule access.',
        'CSMA/CA: sense the channel and use a defined contention/backoff procedure. Sensing requires a receiver in the transmitting node.'
      ]
    },
    {
      type: 'heading',
      text: 'Frequency Separation Needs Receiver Support',
      id: 'fdma-assigns-different-frequency-slots'
    },
    {
      type: 'paragraph',
      text: 'Separate channel centers can reduce overlap when occupied bandwidth, frequency tolerance and guard spacing are appropriate. The receiver must be able to receive the channels assigned to its transmitters.'
    },
    {
      type: 'paragraph',
      text: 'The EU SRD decision includes the 433.05–434.79 MHz range with conditional power and duty entries. It is not an unrestricted pool of independently usable channels; check the applicable entry, equipment rules and national implementation.',
      links: [
        {
          text: 'EU SRD decision',
          href: 'https://eur-lex.europa.eu/eli/dec_impl/2025/105/oj/eng'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'A single receiver tuned to one channel does not automatically receive several channels at once. Concurrent multi-channel reception may require separate receivers or a different architecture.'
    },
    {
      type: 'heading',
      text: 'Time Slots Need Synchronization',
      id: 'tdma-assigns-different-time-slots'
    },
    {
      type: 'paragraph',
      text: 'TDMA gives each participating node a transmit window. Guard intervals account for clock error and switching time, and the receiver must know when to listen.'
    },
    {
      type: 'paragraph',
      text: 'A schedule can bound access delay within the managed network. It does not exclude unrelated radios using the same spectrum or make successful reception deterministic under interference.'
    },
    {
      type: 'paragraph',
      text: 'Clock drift increases timing uncertainty between synchronizations. The design needs an appropriate synchronization method and recovery after reset or missed timing information; a transmitter-only remote may not be able to receive scheduling beacons.'
    },
    {
      type: 'heading',
      text: 'Hopping Requires Matched Radios',
      id: 'fhss-compresses-collisions-into-brief-events'
    },
    {
      type: 'paragraph',
      text: 'FHSS changes the operating channel according to an agreed sequence. Both ends need frequency-agile hardware and enough synchronization to meet on the same channel.'
    },
    {
      type: 'paragraph',
      text: 'A hop can move later packets away from narrowband interference, but a packet lost on one hop is still lost unless the protocol recovers it. Wideband interference or several occupied channels can affect many hops.'
    },
    {
      type: 'paragraph',
      text: 'Adaptive channel selection needs a way to measure conditions and coordinate the changed sequence. Hopping must also fit the spectrum and access rules for the selected market.'
    },
    {
      type: 'heading',
      text: 'Spreading Does Not Guarantee Separation',
      id: 'dsss-trades-bandwidth-for-robustness'
    },
    {
      type: 'paragraph',
      text: 'DSSS maps data to a faster chip sequence and uses matched despreading at the receiver. It can improve tolerance to some interference when its processing assumptions are met.'
    },
    {
      type: 'paragraph',
      text: 'The bandwidth, synchronization and receiver implementation determine the result. Multiple spreading codes are not automatically collision-free, particularly when received powers differ greatly.'
    },
    {
      type: 'heading',
      text: 'Listen Before Transmitting',
      id: 'csma-ca-listens-before-transmitting'
    },
    {
      type: 'paragraph',
      text: 'Carrier sensing or clear channel assessment, CCA, lets a receive-capable node estimate whether a channel is busy. The threshold, observation time and decision method affect which signals it notices.'
    },
    {
      type: 'paragraph',
      text: 'TI’s CC1101 supports CCA for listen-before-talk. A complete contention protocol must still define wait/backoff and retry behavior. ACK-based retries additionally require a return transmission and receive capability at both ends.',
      links: [
        {
          text: 'TI’s CC1101',
          href: 'https://www.ti.com/lit/ds/symlink/cc1101.pdf'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'Two nodes can sense a clear channel together and then transmit together. Hidden nodes and interference that begins after sensing remain possible. CCA lowers some collision risk; it does not guarantee access or delivery.'
    },
    {
      type: 'heading',
      text: 'Specify Retries, Latency and Power Together',
      id: 'the-real-engineering-work-is-the-trade-off'
    },
    {
      type: 'paragraph',
      text: 'For a transmitter-only product, bounded repeated frames can give another chance after a brief overlap. Randomized timing can reduce persistent repeat overlap if the protocol and duty rules allow it, but the remote still has no delivery confirmation.'
    },
    {
      type: 'paragraph',
      text: 'Repeated commands need receiver duplicate handling. Otherwise one press can become multiple toggle actions. Define whether repeats represent the same command, a held key or a new event.'
    },
    {
      type: 'paragraph',
      text: 'For a two-way protocol, bound the retry count, delay and total command age. A late command delivered after several retries may no longer be useful.'
    },
    {
      type: 'paragraph',
      text: 'Listening and waiting for ACKs consume energy too. Measure the entire transaction, including wake-up, receive windows and unsuccessful retries, with the intended traffic.'
    },
    {
      type: 'callout',
      title: 'Check what acknowledgment means',
      text: 'A radio ACK confirms the protocol’s receive condition. It does not by itself confirm relay closure, gate position or completion of a requested action.'
    },
    {
      type: 'heading',
      text: 'Frequency, Coding and Channel Access Are Separate Choices',
      id: 'how-rf-remote-systems-evolved-from-433-mhz-to-2-4-ghz'
    },
    {
      type: 'paragraph',
      text: 'A simple 433 MHz remote can be one-way, but the frequency does not require that architecture. Sub-GHz transceivers also support packet handling, channel assessment and frequency agility.'
    },
    {
      type: 'paragraph',
      text: 'Rolling code changes authentication and replay handling. It does not prevent two radios from transmitting at once and does not inherently improve interference rejection.',
      links: [
        {
          text: 'Rolling code',
          href: 'https://ww1.microchip.com/downloads/en/devicedoc/21143c.pdf'
        }
      ]
    },
    {
      type: 'image',
      src: '/images/blog/rf-remote-control-concurrency-anti-collision/rf-system-evolution-reviewed.webp',
      alt: 'Comparison of frequency band, coding and channel-access choices',
      caption: 'Frequency band, authentication and channel access are separate design choices. A return ACK confirms reception under that protocol, not completion of a physical action.'
    },
    {
      type: 'paragraph',
      text: 'Nordic’s Enhanced ShockBurst guide documents acknowledgment, bounded retries and duplicate packet suppression on compatible two-way hardware. Those features come from the radio and protocol, not simply from operating at 2.4 GHz.',
      links: [
        {
          text: 'Nordic’s Enhanced ShockBurst guide',
          href: 'https://docs.nordicsemi.com/r/bundle/nrf5_sdk_v17.0.2/page/esb_users_guide.html'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'Security is a separate requirement again. A received ACK should not be treated as authentication or as physical-state feedback unless the specified system actually provides those properties.'
    },
    {
      type: 'heading',
      text: 'Test Overlap before Choosing a Remedy',
      id: 'collision-avoidance-builds-order-in-chaos'
    },
    {
      type: 'paragraph',
      text: 'Use the intended receivers and registered remotes. First record each remote’s success alone, then repeat with overlapping presses and varied timing at the same operating locations.'
    },
    {
      type: 'paragraph',
      text: 'Vary the relative received powers as well as timing: one remote nearby and one at the required far point can expose a different failure from two equally close remotes.'
    },
    {
      type: 'paragraph',
      text: 'For a two-way system, log missing data, missing ACKs, retries, duplicate suppression and time to accepted command. For a one-way system, observe the controller output directly; transmitter LEDs cannot report reception.'
    },
    {
      type: 'paragraph',
      text: 'Choose the remedy from that record. Separate channels address overlap only with suitable receivers; time coordination needs synchronization; retransmission needs a repeat policy and duplicate handling.'
    },
    {
      type: 'paragraph',
      text: 'For sourcing, ask whether the handheld contains a receiver, what success an ACK reports, how long retries may continue and how the controller handles repeated commands. Test those answers before treating “anti-collision” as a product specification.'
    },
  ],
  'why-universal-remote-cannot-copy': [
    {
      type: 'image',
      src: illustratedBlogPhotos['why-universal-remote-cannot-copy'].image,
      srcSet: illustratedBlogPhotos['why-universal-remote-cannot-copy'].imageSrcSet,
      alt: 'Illustration: Two distinct unbranded four-button remotes placed side by side',
      caption: 'Illustration of the article topic.'
    },
    {
      type: 'paragraph',
      text: 'A copy remote can report learning success while the receiver ignores it. The indicator confirms a step inside the copy remote; it does not confirm that the receiver has accepted a usable credential.'
    },
    {
      type: 'quote',
      text: 'A universal remote supports a documented set of systems. Identify that set before treating its learning indicator as a compatibility result.'
    },
    {
      type: 'paragraph',
      text: 'For a replacement to work, its radio signal, message format and enrollment behavior must fit the installed receiver. Price and button count do not establish those properties.'
    },
    {
      type: 'paragraph',
      text: 'Begin with the original transmitter and receiver models. The next useful check depends on whether the failure is learning, receiver enrollment or reliable operation after enrollment.'
    },
    {
      type: 'image',
      src: '/images/blog/why-universal-remote-cannot-copy/clone-remotes-show-success.webp',
      alt: 'Illustration of frequency, message-format and enrollment checks for a replacement remote',
      caption: 'A learning indicator does not confirm receiver acceptance. Rolling-code validation follows the receiver\'s authentication and synchronization rules, which may include a forward window.'
    },
    {
      type: 'heading',
      text: 'Separate the Three Stages',
      id: 'the-short-answer-most-copy-failures-come-from-three-issues'
    },
    {
      type: 'paragraph',
      text: 'The original signal may be unreadable to the copy remote, readable but unsupported, or reproduced in a way the receiver does not accept. These are different failures.'
    },
    {
      type: 'list',
      items: [
        'Signal learning: does the device support the original frequency, modulation and format?',
        'Receiver enrollment: does the receiver support the new transmitter and its required registration method?',
        'Operation: after acceptance, do the assigned buttons work repeatedly at the required locations?'
      ]
    },
    {
      type: 'callout',
      title: 'Identify both ends',
      text: 'Use the original remote model and the receiver model together. A shell photograph or encoder marking is supporting evidence, not a compatibility guarantee.'
    },
    {
      type: 'heading',
      text: 'Check the Radio Variant',
      id: 'frequency-is-the-first-gate'
    },
    {
      type: 'paragraph',
      text: 'Universal does not mean every frequency. Look for the replacement\'s supported bands and the original receiver\'s exact radio variant in their documentation.'
    },
    {
      type: 'paragraph',
      text: 'A unit limited to 433.92 MHz cannot operate a receiver limited to 315 MHz. A replacement that covers both bands still needs the correct modulation and message format.'
    },
    {
      type: 'paragraph',
      text: 'Do not assume every metal timing part is a SAW filter or that its marked frequency is the radio carrier. Microchip\'s MICRF112 uses a lower-frequency crystal reference and a PLL to generate its RF output. Check the circuit or model documentation before interpreting a component marking.',
      links: [
        {
          text: 'MICRF112',
          href: 'https://ww1.microchip.com/downloads/aemDocuments/documents/WSG/ProductDocuments/DataSheets/MICRF112-Data-Sheet-DS70005554.pdf'
        }
      ]
    },
    {
      type: 'list',
      items: [
        'Record the full receiver and transmitter model, including suffixes.',
        'Use manufacturer labels or documentation to identify the operating frequency.',
        'Treat PCB markings as clues that need a matching part datasheet.',
        'If the frequency remains uncertain, have it measured rather than ordering by appearance.'
      ]
    },
    {
      type: 'heading',
      text: 'Separate Signal Learning from Receiver Enrollment',
      id: 'fixed-code-and-learning-code-are-where-copy-remotes-excel'
    },
    {
      type: 'paragraph',
      text: 'Fixed code and learning code are not necessarily separate code families. A receiver can learn the ID of a transmitter whose identifier stays the same. It can also enroll a rolling-code transmitter.'
    },
    {
      type: 'image',
      src: '/images/blog/why-universal-remote-cannot-copy/code-types-comparison-reviewed.webp',
      alt: 'Illustration of static identifiers, receiver learning and changing authentication state',
      caption: 'Learning is a registration method and can apply to static or rolling-code systems. Copy-device support depends on the exact frequency, format and receiver; the categories shown do not establish a success rate.'
    },
    {
      type: 'list',
      items: [
        'A static identifier does not advance between uses, regardless of how the receiver stores it.',
        'A rolling-code system validates changing authentication state as defined by its protocol.',
        'Learning describes an enrollment or signal-capture process; ask which meaning the supplier uses.',
        'Require support for the actual receiver model instead of accepting a generic chip list.'
      ]
    },
    {
      type: 'paragraph',
      text: 'Use the replacement\'s own instructions to select a learning mode or prepare memory. Do not erase a working receiver or a multi-button remote as a generic troubleshooting step.'
    },
    {
      type: 'paragraph',
      text: 'Follow the specified placement and timing for that model. There is no universal head-to-head orientation or 3–5 cm separation that establishes compatibility.'
    },
    {
      type: 'paragraph',
      text: 'Test in a stable environment with known-good batteries. If learning still fails, check supported models and the selected mode before repeating resets.'
    },
    {
      type: 'heading',
      text: 'Rolling Code Needs Compatible Credentials',
      id: 'rolling-code-makes-copy-success-meaningless'
    },
    {
      type: 'paragraph',
      text: 'A copy device can store a radio message without possessing the credentials needed to create future messages that the receiver accepts.'
    },
    {
      type: 'paragraph',
      text: 'The HCS301 datasheet describes keys, serial number and configuration programmed into an encoder. Its marking identifies a device type, not the programmed system. Another HCS301-based remote may therefore be incompatible with the receiver.',
      links: [
        {
          text: 'HCS301 datasheet',
          href: 'https://ww1.microchip.com/downloads/aemDocuments/documents/MCU08/ProductDocuments/DataSheets/21143C.pdf'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'Rolling-code receivers check authenticated state and freshness. They can allow forward synchronization windows and model-specific resynchronization; they are not necessarily waiting for exactly one next code.'
    },
    {
      type: 'paragraph',
      text: 'An already accepted message should not serve as a reusable access credential in a correctly implemented rolling-code system. This is a replay-protection objective, not a claim that every rolling-code product is immune to cloning or other attacks.'
    },
    {
      type: 'callout',
      title: 'Use the supported enrollment path',
      text: 'Choose a replacement documented for the exact receiver and follow its authorized registration procedure. That may use a receiver control, an existing transmitter or an administrator tool, depending on the system.'
    },
    {
      type: 'paragraph',
      text: 'If the product\'s credentials or enrollment method are undocumented, ask the supplier for evidence before buying a batch. A blinking learning light is not that evidence.'
    },
    {
      type: 'heading',
      text: 'The Receiver Family Matters',
      id: 'proprietary-protocols-are-the-hidden-trap'
    },
    {
      type: 'paragraph',
      text: 'Two remotes can share a frequency and resemble one another while belonging to different supported families. That mismatch needs model identification, not a conclusion drawn from one failed copy.'
    },
    {
      type: 'paragraph',
      text: 'Nice\'s OX2 FAQ provides a concrete example: the hardware supports several encoding families, but transmitters stored in a receiver must belong to the same family. A general supported-protocol list does not describe every already-programmed installation.',
      links: [
        {
          text: 'OX2 FAQ',
          href: 'https://www.niceforyou.com/en/professional-area/videos-faq/control-systems/ox2'
        }
      ]
    },
    {
      type: 'list',
      items: [
        'Ask whether the supplier validated the exact receiver and transmitter models.',
        'Confirm the receiver\'s currently selected encoding family where the manual requires it.',
        'Check the required button mapping, registration method and memory limits.',
        'Record product revisions and limitations with the sample result.'
      ]
    },
    {
      type: 'paragraph',
      text: 'Where replacements are unavailable, an installer can assess an external receiver. Suitability depends on the operator\'s power, command interface and safety functions; it is not a universal direct-wiring remedy.'
    },
    {
      type: 'heading',
      text: 'Works Nearby but Not at the Required Distance?',
      id: 'copied-successfully-but-still-unreliable'
    },
    {
      type: 'paragraph',
      text: 'Once the receiver accepts the replacement, test it beside the original at the same locations and orientations. Repeat the checks with known-good batteries and record responses.'
    },
    {
      type: 'paragraph',
      text: 'Short or intermittent range can come from the transmitter, receiver installation, battery contacts, interference or timing behavior. The symptom alone does not identify poor hardware.'
    },
    {
      type: 'image',
      src: '/images/blog/why-universal-remote-cannot-copy/remote-copy-troubleshooting-checklist-reviewed.webp',
      alt: 'Illustration of model identification, protocol checks and authorized replacement testing',
      caption: 'Use model-specific instructions before resetting memory or choosing a learning distance. Oscillator names and FST labels do not replace performance tests of the assembled remote.'
    },
    {
      type: 'list',
      items: [
        'Check battery condition and contacts.',
        'Keep the receiver antenna and surroundings unchanged while comparing remotes.',
        'Compare normal grip and orientation at the required locations.',
        'Have frequency, output and message timing measured if the comparison remains inconclusive.'
      ]
    },
    {
      type: 'paragraph',
      text: 'Specify performance over the required voltage and temperature range. Crystal, SAW and LC name implementation choices; FST is not a general engineering quality standard. Accept measured results for the complete remote rather than an oscillator label.'
    },
    {
      type: 'heading',
      text: 'Verify the Offered Market Variant',
      id: 'export-markets-need-more-than-copy-ability'
    },
    {
      type: 'paragraph',
      text: 'For resale, compatibility and market requirements both need evidence. Identify the destination and the exact configuration before assuming a product can be supplied there.'
    },
    {
      type: 'list',
      items: [
        'Check that the documented model and frequency match the unit being offered.',
        'Have the applicable transmission and emissions requirements identified for that product and market.',
        'Request the required declarations, approval records or technical documentation, as applicable.',
        'Review whether selectable frequencies or later hardware changes remain within the documented scope.'
      ]
    },
    {
      type: 'paragraph',
      text: 'For EU sales, Your Europe describes the responsibilities of manufacturers and importers, including conformity assessment and documentation. A generic compliance logo on a listing does not identify which model or configuration the evidence covers.',
      links: [
        {
          text: 'Your Europe',
          href: 'https://europa.eu/youreurope/business/product-rules-compliance/general-product-compliance/index_en.htm'
        }
      ]
    },
    {
      type: 'heading',
      text: 'Before Ordering Another Sample',
      id: 'copy-troubleshooting-checklist-before-spending-more-money'
    },
    {
      type: 'list',
      items: [
        'Identify the original transmitter and installed receiver by full model.',
        'Verify the supported frequency, modulation and receiver family.',
        'Select the enrollment method from the correct instructions.',
        'Preserve existing credentials unless a documented reset is needed and authorized.',
        'Test every required button and repeated operation at the intended locations.'
      ]
    },
    {
      type: 'heading',
      text: 'Send the Supplier These Details',
      id: 'still-stuck-send-these-five-details'
    },
    {
      type: 'paragraph',
      text: 'A useful support request identifies the installation and what stage failed. It gives the supplier something specific to check instead of another universal compatibility question.'
    },
    {
      type: 'list',
      items: [
        'Original transmitter and receiver model numbers, with clear label photographs.',
        'Destination region and documented frequency, if known.',
        'Application and required button functions.',
        'Authorized receiver access and the programming method already tried.',
        'What happened: learning indication, receiver response, and operation at tested distances.'
      ]
    },
    {
      type: 'paragraph',
      text: 'Those details help distinguish an unsupported copy format from a required dedicated replacement or a receiver upgrade. Confirm the selected option on an authorized sample installation before placing a wholesale order.'
    },
  ],
};

export function getBlogPost(slug: string): BlogPost | undefined {
  const meta = blogPosts.find((item) => item.slug === slug);
  const content = blogContentBySlug[slug];
  if (!meta || !content) return undefined;
  return { ...meta, content };
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.flatMap((meta) => {
    const content = blogContentBySlug[meta.slug];
    return content ? [{ ...meta, content }] : [];
  });
}

/** Build-time guard: metadata and content trees must describe the same articles. */
export function assertBlogContentIntegrity(): void {
  const metaSlugs = new Set(blogPosts.map((post) => post.slug));
  const contentSlugs = new Set(Object.keys(blogContentBySlug));
  const missingContent = [...metaSlugs].filter((slug) => !contentSlugs.has(slug));
  const orphanedContent = [...contentSlugs].filter((slug) => !metaSlugs.has(slug));
  if (missingContent.length > 0 || orphanedContent.length > 0) {
    throw new Error(
      `Blog data mismatch — missing content for: [${missingContent.join(', ')}]; orphaned content for: [${orphanedContent.join(', ')}]`,
    );
  }
}
