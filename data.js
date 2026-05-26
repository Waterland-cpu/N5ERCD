const errorData = [
  {
    "Error message": "@@@----Failed to Get Temperature on NextSeq 550",
    Solution:
      "1. If run performance is normal, Power Cycle the instrument and continue with next run if system without issue\n2. If run is affected, Power Cycle and performance system check. If tests all pass, proceed next run",
    Image: "images/image052.jpg",
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "Async Command Timeout Error on NextSeq 550",
    Solution:
      "1. After run completes, confirm run performance not affected by error\n2. Power cycle\n3. IF system initializes, proceed with next run\n4. IF the system doesn't initialize, task FSE",
    Image: "images/image053.jpg",
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "Asynchronous Firmware Operation Error for NextSeq 550",
    Solution:
      "1. If run hasn't stopped, monitor run.\n2. After run completes, check run performance notaffected by error.\n3. Power Cycle\n4. If system initializes, proceed with next run.\n5. If error 2-3 runs in a raw, task FSE(may need to replacce MPCA)",
    Image: "images/image054.jpg",
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "Bit Error for NextSeq 550",
    Solution:
      "1. Power Cycle\n2. If same error appear after power cycling, task FSE, May need to replace IM.",
    Image: "images/image056.jpg",
    "Unnamed: 3": 0.0,
  },
  {
    "Error message": "IM trouble shooting skills",
    Solution:
      'Camera Module on Nextseq consists of 6 sensors: S0,S1,S2,S3,S4,S5\n\nRibbon cable "A" connects sensors S0,S1,S2 to the MPCA；\nRibbon cable "B" connects sensors S3,S4,S5 to the MPCA.\n\nIf a single sensor fails a BER test, you can swap the ribbon cables "A" and "B" and repeat the test.\n\nIf a different sensor now fails, the problem is a bad sensor.\nIf the same sensor fails, the problem is a bad MPCA or possibly a Xeon (if tested using NSS)',
    Image: NaN,
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "Blue Screen of Death (BSOD) on NextSeq 550",
    Solution:
      "1. Power Cycle\nIf system initializes, check Windows logs for error.\nCheck run output.\nIf system doesn't initialize, task FSE.",
    Image: "images/image058.jpg",
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "Buffer Tray Stuck on NextSeq 550",
    Solution:
      "1. Confirm sippers are raised. If unable to raise restarting NSS or power cycling\n2. Costumer can use a little force to attemp to move tray out.\n3. If the tray becoming worse, task FSE to clean or replace buffer guide rails.",
    Image: NaN,
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      "Camera Disabled: Failed to Detect Clusters (Only Cycle 1) on NextSeq 550",
    Solution:
      "1. Review cycle log to confirm rub stopped with camera disable message\n2. Review Focus image at cycle 1\n\nIf run stop at cycle 1 and lane 1/3 low CD (no focus images for lanes 2/4), could be related to library, instrument, or FC ( Power cycle, run system check, check run)\nIf run stops at cycle 1 and lanes 1/3 good CD and lanes 2/4 do not, could be FC or instrument. Proceed Power cycle and system check.",
    Image:
      '<img src="images/image060.jpg">\n<img src="images/image061.jpg">\n<img src="images/image063.jpg">\n<img src="images/image064.jpg">\n<img src="images/image065.jpg">',
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      "Camera Disabled: Failed to Detect Clusters (Run does not stop) on NextSeq 550",
    Solution:
      "1. Evaluate run performance for other sections and lanes; review focus image to determine initial cluster density. If poor performance, likely sample/cluster density issue (ask customer about library type, size, quantification, and QC).\n2. If run performance meets spec, then likely communication issue; Power Cycle instrument and perform system check.\n3. If issue persistently happens with the same camera and cluster density not suspected, can task FES to clean the cameras and check optics.",
    Image: "images/image066.jpg",
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "Camera Disabled (Mid-run) on NextSeq 550",
    Solution:
      '"camera sensor disabled" or "camera sensor failure"\nThis phenotype is different from the NSQ camera Disabled/Failed to detect clusters phenotype which occurs at cycle 1. This may be related to escalation case 00008565 due to a FPGA firmware bug.\nA root cause due to FPGA v3.16, meaning that all RUO Nextseq instruments may show this phenotype. From the logs the following term will be present: "sensor_retries":4. This issue is not corrected by MPCA replacement, as new MPCAs have identical FPGA vrsions. The upgrade to NCS 4.0 should also resolve these issue.\n\n1. Check cycle log for the following term: "sensor_retries":4 or "ix_exception_id_camera_failed"\n2. Confirm camera disabled phenotype in SAV\n3. Verify FPGA versions 3.16 in D:\\\\Illumina\\NextSeq Temp\\<run folder>\\Logs\\Config\\Firmware\\Firmware log (if related to escalation)\n4. Power Cycle\n5. If this continues for future runs, contact the field team.\n* Problem have solve',
    Image: NaN,
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "Cavro Syringe Pump Error on NextSeq 550",
    Solution:
      'Indicate fluidics system\n"an error occurred while sequencing. Will now proceed to deetermining whether to perform a post-run wash".\nOriginally caused by: Error in Fluidics.FlowCellFluidics1.LanePump.IXPassThroughCavroSyringePump2. Auto syribge overload recovery for dispense is not enabled.\n\n1. Regardless of wgether a power cycle /system check was performed after, always task the FSE since the parts need to be replace. Maybe syringe',
    Image: "images/image067.jpg",
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "Error in Fluidics -Lane Pump on NextSeq 550",
    Solution:
      "This error indicates there is an issue with the fluidics system and can appear at anytime (ex: initialization, wash, pre-check, during run). This can be a communication error or an issue with the syringe pump\n\"Error in Fluidics.FlowCellFluidics1.LanePump. Device not initialized. Command = 'Q', reply = '7'\"\n\n1. Power cycle\n2. If instrument initializes without issue can monitor next run/wash\n3. If error appears again after initialization, task FSE ",
    Image: "images/image068.jpg",
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      "Error posting information for memory mapped image files on NextSeq 550",
    Solution:
      "Error posting information for memory mapped image files … to RTA oringinally caused by : No connection could be made because the target machine actively refused it.\n\nSoftware error\nnetwork security issue ( ex. GPO's were pushe from network during run)\nCommunication issue\n\n1. review run logs and Windows logs\n2. If error appears again after initialization, task FSE",
    Image: NaN,
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      "Error Related to InstrumentMaintenanceState.xml on NextSeq 550",
    Solution:
      'This following error may appear after perfroming an upgrade to Windows 10/ NCS 4.0.1 or an instrument that requires air filters (NextSeq Dx, iseq, NovaSeq). This result in the control software unable to initialize and power cycling will not resolve the issue.\n\n""While loading instrument maintenance state file C:\\ProgramData\\Illumina\\NextSeq\\InstrumentMaintenanceState.xmxl. Originally caused by : Root element missing"\n\n1. Review the instrumentMaintenanceState.xml located in (C:\\ProgramData*\\Illumina)\n2. If File appears blank , you will need to copy a correct version of the InstrumentMaintenanceState.xml from another Nextseq\n3. Once correct file has been copied in same location, restart NCS',
    Image: '<img src="images/image070.jpg">\n<img src="images/image071.jpg">',
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "Extended Run Time and High T Calls on NextSeq 550",
    Solution:
      "High Tcall during the run, especially in the bottom surface. Top surface appear to be mostly un-impacted.\nAn issue with the SBC is suspected of causing cycle to take longer and as this occcurs the red channel  fluorescence could end up becoming dimmer. The A base may end up having a hidher proportion of the fluorescen from the green laser, resulting in the A base becoming recognized as a T base. This may start with the laser tile scanned and as cycle geet longer more tiles may becom impacted. Top surface is suspected of not being as impacted due to being scanned first, however would need to investigate this futher.\n1. task the FSE to replace the SBC, MPCA, and perhaps Hard Drive\n\nEarlier information\nfull HDDs\ninstrument not power cycled regularly\noverheating SBC\n1. Confirm number of impacted runs\n2. Review run metrics\n3. Confirm run time in logs\n4. Ask customer if they power cycle regularly\n5. If not, anf only one run impacted, pwer cycle and start next run.\n6. If multiple runs impacted and custo=mer power cycle regularly, task FSE to check hardware: SBC fans and IM may have dust accumulation.",
    Image:
      '<img src="images/image073.jpg">\n<img src="images/image075.jpg">\n<img src="images/image077.jpg">\n<img src="images/image078.jpg">\n<img src="images/image079.jpg">\n<img src="images/image080.jpg">\n<img src="images/image082.jpg">',
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "Failed Camera Board on NextSeq 550",
    Solution:
      "Message observed: All cameras disabled Oringially caused by: Failed Camera Board.\nThis error can occur at the beginning or during a run. Error may be related to a communication error, loose connections from camera board or a hardware failure at MPCA\n\n1. Proceed with power cycling instrument\n2. After instrument initializes, proceed with system check\n3. If everything passes during system check, proceed with setting up and monitoring next run\n4. If similar error appears at any stepm, task the FSE to inspect the optics or replace the IM",
    Image: NaN,
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "Flow Cell Door Error on NextSeq 550",
    Solution:
      'A communication error, but especially if the instrument had not been power cycle in a while.\n"Error message: Exception generated from IxCmdIllumina.Spark.EmbeddedCommandSet.ix_dlowcell_door _open an error has occurred while executing command Originally caused by: An error has occured while executing the command"\n\n1. Power cycle\n2. If instrument initializes okay, can tesst door by either 1) Going to Manage instrument and select Unload consumables or 2) Proceed with wash setup\n3. If instrument without error, proceed with next run\n4. Over time the door motors may get worn down and if issue persists please task the FSE',
    Image: "images/image084.jpg",
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      "Flow Cell Registration/ Failed to Find Fiducial Notification on NextSeq 550",
    Solution:
      "Fiducial was not found during flow cell registration. X and Y distance between each of the cameras relative to camera 2. The Xyregistration test is performed to find the fifucial on the flowcel, which usually occurs before the run starts. The camera doesn't typically look at the fiducial during the run so a failing XY registration test would not typically correlate to a run failure, Fiducails do not require clustering to be found, These notification usually do not affext run performance and are transient communication issues. The NSQ flow cell has 6 fiducials and the instrument requires reading og 1 to start the run.\n\n1. After run completes, confirm ru oerformance not affected by error\n2. Power cycle Nextseq\n3. If system initailizes, prceed with next run",
    Image: "images/image086.jpg",
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "Flow Cell Registration Failed (Skew) on NextSeq 550",
    Solution:
      'The following error message "Flow Cell Registration Failed (skew). No action necessary" is suspected of being a software communication and should not impact run performance.\n\n1. Monitor until completion\n2. Power cycle instrument before next run',
    Image: "images/image087.jpg",
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "Fluidics Automation Error on NextSeq 550",
    Solution:
      "1: Operation home failed due to flowcell_z not being able to move to flowcell_z_home=1\n3: Failed to move flowcell_z to down\n6: Move flow cell to out failed due to flow cell home not being 0\n7: Failed to move flowcell_x (FlowCell Loading Mechanism)\n20: Failed to move sipper_y to pick\n22: Move reagent z to down failed due to reagent tray up being 0\n24: Operation home failed due to reagent_z not being able to move to reagent_tray_down = 1\n26: Operation home failed due to reagent_z not being able to move reagent_tray_down = 0\n30: Sensor align flow not aligned to 1\n34: Operation home failed due to flowcell y being able to movve to flowcell_y_home = 1\n35: Sipper_Y not being able to move\n36: Operation home failed due to sipper_y not being able to move sipper_y_home = 1 - fluidics\n39: Cannot perform pierce. Machine state is unk and is expected to be loaded. The mechanisms have been automatically reinitialized in order to return to a working state\n41: Cannot perform unload. Machine state is unk\n47: Operation up failed due to straw_z being able to move to straws_down = 0\n50: Operation up failed due to straw_z not being able to move to straws_up = 1\n51: Operation up failed due to straw_z not being able to move to straws_down = 0\n52: Operation down failed to waste presence not beinig 1\n54: Operation sown failed due to straw_z not being able to straw_down = 1\n55: Operation up failed due to straw_z not being able to straws_down = 0\n58: Related to not loading tray\n65: Sensor reagent_door_open should be 0, but it is not\n66: Sipper_y stopped due to safety_interlock\n67: Reagent_z stopped due to safrty_interlock\n69: Operation init failed due to flowcell_align1 not being 1 (or 0)\nTroubleshooting steps:\n1. Power cycle. If unable to initialize due to error again, task FSE\n2. Perform system check - if ant tests fail, task FSE. If tests pass, monitor next run.",
    Image: "images/image089.jpg",
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "Imaging System Failed Pre-Run Check on NextSeq 550",
    Solution:
      "This error is normally indicative of a flow cell seaitng issue or a communication.\n\n1. Reseat flow cell and try again\n2. Power cycle if necessary.\n3. If Reseating and power cycling does not resolve, the issue could be with the flow cell. Have customer inspect flow cell and if any issue, could try a new one.",
    Image: "images/image090.jpg",
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      "Initialization Error on NextSeq 550/MiniSeq, 'Failed to load BaseSpace Cloud API URL from configuration. Please make sure BaseSpace Broker is installed properly.'",
    Solution:
      'The most common is because the .xml and .dat files associated with the Proactive connection get duplicated in the archive folder, and each duplicate has a .bak appended to the file name. Eventually, they reach the character limit and cannot create additional .bak files, which prevents Broker from stating.\n\n1. Close NCS\n2. Make sure the computer date and time match the customers local time.\n3. Task manager\n4. Navigate Service tab, locate Illumina BaseSpace Broker, right click and select "Stop Service".\n5. Navigate to directory D:\\Illumina\\BaseSpaceBroker\n6. You will see files with .dat and .xml extensions. You should only see one .dat and one .xml files forr your most recent run. If you see more than two files, move any files that do not have your Run ID to the archive folder. (If you only see a .xml file that is okay as well)\n7. Check the D:\\Illumina\\BaseSpaceBroker\\Archivev folder and look for any files with one or more .bak added to the end of the file. Youcan safely delete all of these from this folder.\n8. Go back to Task manager > Services > BaseSpace > Right Click and select "start service"\n9. Once the sevice is restarted, restart the NCS and ensure that it is able to initialize\nRemoving the .bak files is only a temporary solutionbecause of an issue with how Broker and Proactive interact. If the issue persists, either:\nTeach the customer how to remove the .bak files on their own (Preferred)\nUncheck the \'Send to Proactive\' manage instrument > Analysis Setting',
    Image: NaN,
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      "Initialization Failure due to Proxy Warning on NextSeq 550",
    Solution:
      '"Failed to communicate with firmware via FTP at \'XXX.XX.XXX.X\'. This may be caused by incorrect Proxy Settings. If\nthe instrument is using Proxy Servers for LAN, ensure the IP Address..."\n"The remote server returned an error: (500) Internal Server Error.\nError is different from the NVRAM or Socket errors when internal NIC is configured incorrectly\n-Some GPOs may restrict access to the Control Panel. If cannot access, need to bring in customer\'s IT group for\nassistance\n-Some GPOs may push other rules in place which would then change these options back to another value. Check\nwith customer\'s IT for removing these rules\n-LAN settings have a "bypass for local address" option. This does not affect the MPCA or internal NIC addresses.\nMake sure these exceptions are present',
    Image:
      '<img src="images/image091.jpg">\n<img src="images/image093.jpg">\n<img src="images/image094.jpg">\n<img src="images/image095.jpg">',
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "Low Intensities on NextSeq 550",
    Solution:
      "NSQ  run intensities are expected to range from 3000-7000. If intensities are <2000 for multiple runs, the objective may be dirty and would require an FSE to clean the objective\n\n1. Review multiple recrnt runs for intensity reading\n2. Task FSE",
    Image: NaN,
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "Not Found Error Message on NextSeq 550",
    Solution: "Advised to remove  McAfee antivirus and reattempt the run",
    Image: "images/image104.jpg",
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "Object Reference Error on NextSeq 550",
    Solution:
      'The "Object reference not set to an instance of an object." error is a Windows framework error that can occur for a number of reason.\n\nIf during run setup or post run wash (not during run):\n1. Power cycle\n2. If system initializes without issue, can proceed with next run or wash\nIf during the run:\n1. After run completes, confirm run performance not affected by error\n2. Power cycle\n3. If system initializes without issue, can proceed with use\nIf run was affected/stopped:\n1. Check for any network issue\n2. Review run data/logs\n3. Power cycle\n4. If instrument related issue due to system check: task FSE\n',
    Image: "images/image106.jpg",
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "Possible stale image data detected on NextSeq 550",
    Solution:
      "Faulty FC (sometimes trying with a new FC works)\ncommunication error\nClustering issues\nDisconnected cable or hardware issue requiring FSE\n\n1. Evaluate run performance if enough cycles completed before error occurred; if poor performance, troubleshooting sample\n2. If run performance meets spec, then possible communication issue, flow cell, or hardware issue; power cycle instrument and perform system check tests",
    Image: NaN,
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "RAID error on NextSeq 550",
    Solution:
      '1. Activate "Intel Rapid Storage Technology enterprise" at icon I the lower right corner taskbar. And check for "Failed" status at Disk Properties\na. The Disk Status may also report as "At Risk (SMART Event)"\n2. Click on "Mark as normal" (indicated by red arrow) and allows the instruments to repair the RAID1 configuration. It take roughly 4 hours (strongly recommended not to perform seqeuncing during these 4 hours).\na. If the Disk Status is "At Risk (SMART Event)", "Mark as normal" is not an option. Instead, select "Suppress SMART event"\n3. Run NSS & click on the instrument icon (indicated by red circle). Select "System Tools" folder. Click "Clear" at the Clear Raid Notificaiton (indicated by blue circle)\nIf resolved, warning message will not appear when running NCS\nIf not, warning message may need to be cleared through NSS.',
    Image:
      '<img src="images/image108.jpg">\n<img src="images/image110.jpg">\n<img src="images/image112.jpg">\n<img src="images/image114.jpg">',
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "Remote Server Returned an Error on NextSeq 550",
    Solution:
      'The following error can occur at the start or during a run: "Remote server returned an error: (426) Connection closed; transfer aborted"\nThis error is suspected to be caused by a temporary interruption in the network (transient network issue)\n\n1. If run has not stopped, allow instrument to proceed with sequencing and confirm all files transferred sucessfully to the output location',
    Image: "images/image116.jpg",
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "RFID Errors on NextSeq 550",
    Solution:
      "These can be due to 1) Communication issue with the sensor or 2) RFID issue with the consumable\n\n1. Re-seat/reinsert consumable\n2. Power cycle instrument\n3. Try a new consumable (if resolve, most likely an RFID issue with consumable)\n4. If the issue cannot solve, the indicate an issue with the RFID sensor on the instrument and would need to send a task FSE",
    Image: '<img src="images/image118.jpg">\n<img src="images/image120.jpg">',
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "RheodyneValve Error on NextSeq 550",
    Solution:
      "The Rheodyne vakve is not prone to failure, and this typically resukts from a communication error.\n\n1. Power Cycle\n2. Run the 'valve responese test' of the system check.\n3. Perform wash- if erro does not recur, instrument is cleared for us\n4. If the error appears again after the power cycle or during the system check or wash, task FSE to exchange the FAM",
    Image: "images/image122.jpg",
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "Socket Error on NextSeq 550",
    Solution:
      'Initialization fails with error: “While attempting to initialize communication with firmware prior to reading device settings from NVRAM. (System.Net.Sockets.SocketException)\n\nor\n\nSocket error on TCP port 192.168.113.2:5555 (System.Net.Sockets.SocketException)\n\n“A connection attempt failed because the connected party did not properly respond after a period of time, or\nestablished connection failed because connected host has failed to respond 192.168.113.2.5555Error code is\n“10060”\n\nCause: internal network error (NSQ has 2 NIC - network interface cards; one connects instrument to network, other is for SBC to hardware control computer MPCA)\n\n1. Close NCS\n2. Go to the control panel > network and sharing center > Change Adpter Setting (or windows mark→ Settings→ Network and Internet)\n3. Unplug the Ethernet cable from the instrument and see which of the 2 networks goes down. (This is the one\nfor internet/outside network. It will list as "network cable unplugged")\nNote: if performing GTA you may lose connection\nSelect the “Unidentified Network” Properties. (This is the other NIC which is used for internal\ncommunications)\nNetworking should be TCP/IPv4 (v6 should be unchecked)\nClick the TCP/IPv4 selection and select "Properties":\nThe Static IP address should be 192.168.113.5\nSet Subnet Mask to 255.255.255.0\nLeave Default Gateway blank\nNote: For Windows 10 (NCS 4.0.+), IP address is 192.168.113.3\n*Since power cycling can take more than 5 minutes to complete on the NextSeq 500/550 and more than 10\nminutes for the NextSeqDx, the following steps can save troubleshooting time and skip the power cycle:\n1. After correcting the TCP/IPv4 configuration, open the network and internet settings\n2. Right click the internal NIC and select disable\n3. Wait a few seconds, then right click the internal NICand select enable\n4. Launch the NCS\nSelect OK in all dialog boxes and close\nIf there is a notification about an adapter with duplicate settings, select "Proceed" to use the settings that\nwere just selected.\nYou can close all setting panel windows. If starting control software without Ethernet cable, the instrument\nshould not show any error\n*Or you can power cycle the NextSeq (plug in the Ethernet cable when it is off) and open NCS',
    Image: NaN,
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "Spent Reagent Container Not Detected on NextSeq 550",
    Solution:
      "This usually appear during setting up a wash or a run. Can be related to a communication error or a dirtybroken sensor.\n\n1. Cleaning the waste container sensor\n2. If cleaning sensor does not work can try power cycle\n3. If error message continues to appear, and FSE may be required to clean or replace the waste sensor flag or replace the spent reagent cartridge (PN15049517)",
    Image: NaN,
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      "The inserted cartridge is not a genuine Illumina consumable on NextSeq 550",
    Solution:
      '"Binary Part number revision (0xBDFF) byte 1 (0xBD) is invalid, must be either 0x00, or ASCII for A-Z or 0-9 Parameter name: byte1"\n\n1. Run NSS RFID test: NextSeq Service Software > Mechanical and Fluidics Tests > RFID\na. When you run the RFID test in NSS, it inverts the bits in the RFID giving you an error\nb. Run that same cartridge/FC/etc in the NSS test a second time and it should flip the bits back to normal\n2. If the following error is received, FSE can order  new cartridge and flow cell: \n" Error: AllSensors.Rfidconsumables.ReagentWithRfid: Consumable Type is P11BeadchipCarrier, must be in..."\n"Action: Invert the nits in the RFID will not resolve issue. Recommend FSE to order new wash FC and wash cartridge.',
    Image:
      '<img src="images/image123.jpg">\n<img src="images/image125.jpg">\n<img src="images/image127.jpg">\n<img src="images/image128.jpg">\n<img src="images/image129.jpg">',
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      "Troubleshooting Error: An existing connection was forcibly closed by a remote host on NextSeq 550",
    Solution:
      'Error message: An error occurred while sequencing. Will now proceed to determining whether to perform a post-run\nwash. (System.Net.Sockets.SocketException) • An existing connection was forcibly closed by the remote hostError\ncode is "10054" • Unable to read data from the transport connection: An existing connection was forcibly closed by\nthe remote host.\n\nUsually this error will stop the run at cycle 5 since this is when RTA gets busy for the run. The error usually reflects when communication between SBC and MPCA boards are blocked (or the connectors between the two are spotty, or the MPCA is going bad) A gateway IP for this internal connection can confuse it.\n\n1. Check Antivirus, GPO, Output data, IPs are connected, collect NCS and UCS logs\n2. Verify IT about gateway value\n3. If first instance and no issue found in items above, power cycle instrument and monitor next run\n4. If issue reoccurs, try changing the internal network IP to 192.168.113.5 and test if NCS will initialize. If so, power cycle again and monitor next run\n5. If issue reoccurss, task FSE to check/replace MPCA',
    Image: NaN,
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "Unable to Unload Reagents on NextSeq 550",
    Solution:
      "Sometimes during a wash or run setup the instrument may be stuck at the unloading reragent cartridge screen. This can be a communication issue between the hardware and software\n\nIf screen is not frozen:\n1. Exit back to Main Menu\n2. Go to Manage instrument and Select Unload Consumables\n3. If unable to unload, can close and restart NCS or proceed with power cycling instrument\n\nIf screen is frozen:\n1. Use task manager to exit out of NCS\n2. Initialize NCS and proceed with wash/run setup\n3. If still an issue, power cycleinstrument",
    Image: NaN,
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "Unable to Update Run on BaseSpace Error for NextSeq 550",
    Solution:
      "1. Open Task Manager, confirm BS Broker is Running and 'Try Again'\n2. If not, continue to troubleshoot BS Broker issue using troubleshooting guide",
    Image: "images/image131.jpg",
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "Waste Container Full on NextSeq 550",
    Solution:
      "1. Ask customer to empty waste container and continue run\n2. If error persist, provide guidance for cleaning the waste container sensor with lens paper or kim wipe (black circle located above the waste container) and power cycle\n3. If error message continue to appear, an FSE may be required to clean the waste sensor or replace the spent reagent cartridge (PN 15049517) or check the flag of waste sensor ",
    Image: "images/image132.jpg",
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      "Exception generated from IxCmd Illumina.Spark.EmbeddedCommandSet.ix_zstage_set_height: Timeout occurred",
    Solution:
      "After receiving this error and restating the NCS software, a similar initialization error may also be received:\n\n1 device failed initialization and 2 devices were never initialized: ImagingModule: Initialize FAILED, Fluidics: NOT Initialized, Instrument: NOT initialized\n\nThe following Z stages are not ready after initializing: 2, 3\n\n1. task FSE ,maybe need to replace Flowcell Cartridge ",
    Image: "images/image150.png",
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "Camera board Failure",
    Solution: "IM camera board\n\n1.task FSE, maybe need to replace IM ",
    Image: NaN,
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      "Error in Fluidics.FlowCellFluidics1.LanePump. Syringe pump valve failed to move: Valve overload. Command = 'Q', reply = '10'",
    Solution:
      "Valve overload\n\n1. task FSE, maybe need to replace valve if reinitialize cannot overcome",
    Image: "images/image151.png",
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      "Could niot locate Fluidcs.FlowCellFluidics1.FlowcelltemoeratureSensor on any COM port",
    Solution:
      "HCT not initialized properly\n\n1. Initialize Sensor\n2. visiting Device Manager check COM port connect correctly.",
    Image: "images/image152.png",
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "(30) Sensor flowcell_align2 should be 1, but it is not",
    Solution:
      "Flowcell sensor align malfunction\n\n1. task FSE, maybe need to replace Sensor",
    Image: "images/image153.png",
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      "Error in Fluidics.FlowCellFluidics1.LanePump. Syringe pump valve failed to move: Valve overload. Command = 'Q', reply = '9'",
    Solution: "Syringe over load\n\n1. task FSE, maybe need to replace syringe",
    Image: "images/image154.png",
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      "Timeout waiting 60000 ms with EventToBlockingConverter.WaitForData().",
    Solution:
      "Error in Cavro pump\n\nWhile executing several activities in parallel\n\n1. task FSE, maybe need to replace new MPCA",
    Image: "images/image155.png",
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      "Failed to  move to X=-2.00mm, Y=34.25.\nCurrent position: X=-2.00mm, Y=34.04mm.\nOriginally caused by: XY Motion Fault",
    Solution: "XY Motion Fault\n\n1. task FSE, maybe need to replace IM",
    Image: "images/image156.png",
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      "The following Z stage are not ready after initailizing: 1",
    Solution: "Z Stage Failure\n\n1. task FSE, maybe need to replace IM",
    Image: "images/image157.png",
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      "Camera 2 lane 1 surface top disabled: Failed to detect clusters",
    Solution:
      "Fluidics failure causing inaability to form clusters\nPoor quality of consumables (Flow Cell) causing inability to form clusters\nLook at the logs to confirm that the cameras disabled error is caused by no clusters being found.",
    Image: '<img src="images/image158.png">\n<img src="images/image159.png">',
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      "Camera 5 lane 4 surface bottom disabled: Failed to generate focus model\nCamera 5 lane 4 surface top disabled: Failed to generate focus model",
    Solution:
      "IM (AF laser) failure causing inability to generate Focus Model\n\nPoor quality of Flow Cell causing the inability to generate focus model - likely to be major scratch/obstruction on the Flow Cell surface\n\nRemark: For this case, the Af laser was no longer functional during the seq. run and was detecte by running the optical tst after the seq. run. Exposure time for the AF laser for cam 5 was out of spec.\n\n1. task FSE, maybe need to executing IM test",
    Image: "images/image160.png",
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      "Flow Cell Registration: Camera 1 suceeded; Camera 2 failed to find fiducial; Camera 3 succeeded; Camera 4 succeeded; Camera 5 succeeded; Camera 6 succeeded",
    Solution:
      "Possible obstruction in the optical parh of camera 2.\nDefective LED on Camera2\n\n1. task FSE,  execute IM Test required to confirm failure.\n2. IM replacement required to resolve issue if LED Mearsurement for Camera 2 is defective.",
    Image: "images/image161.png",
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      "Flow Cell Registration Failed (skew) No action necessary.",
    Solution:
      "Poor assembly of the Flow Cell\n\nPoor quality of the Flow Cell due to inherent skew of the Flow Cell dure to chip at the edge of the glass or offset/skew in the fiducial.\n\n1. Try to reassemble the Flow Cell and restart to resolve issue\n2. Flow Cell reassembly/ replcaement",
    Image: "images/image162.png",
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      "Flow cell registration failed (skew). No action necessary.\nFlow Cell Registration: Camera 1: Laser coarse focus failed to find surface; Camera 2: Laser coarse focus failed to find surface; Camera 3 succeeded; Camera 4 succeeded; Camera 5 succeeded; Camera 6 succeeded",
    Solution:
      "Not true skew failure. The skew failure is actually due to the instrument not being able to find the fiducials successfully.\n\nCould be due to the bea=st z-height required for the current Flow Cell, deviates by a significant value (out of the expected range) from the exiting Focus Model in the instrument. This could be caused by variation accross Flow Cells used for seqeuncing runs.\n\n1. For instrument that was shipped out from Manufacting with 1.3 aand above:\nDelete the Focus Model stored in the path D:\\\\Focus Model and restart the Pre-Run check in NCS.\n2. For instrument that was shipped out of Manufacturung with NCS 1.2:\nRegenerate the Focus Model using an Ubertarget",
    Image: "images/image163.png",
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      "Camera 1 top surface: Through-focus peak did not exceed SNR threshold. SNR0.19 stddev 0.1 SNR threshold 5;;;;;; Originaaly caused by : Camera 1 top surface: Though-focus peak did not exceed SNR threshold. SNR 0.19 stddev 0.1 SNR threshold 5",
    Solution:
      "Defective LED during a seqeuncing run\n\n1. task FSE,  execute the IM test to confirm the LED mearsurement vlaue\n2. IF the LED is defective, replcae IM",
    Image: "images/image164.png",
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      "The following Z stage are not ready after initailizing: 6",
    Solution:
      "Z Stage Failure\nGo to the details of the error to find out which z-stage was having issue\n\n1. task FSE, maybe need to replace IM",
    Image: '<img src="images/image165.png">\n<img src="images/image166.png">',
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      "Camera 1 can not find Autofocus laser spots, Focus model failed",
    Solution:
      "Faulty Ubertarget/ Dirt on the AF tile of the Ubertarget\n\n1. FSE clean/ replace Ubertarget",
    Image: '<img src="images/image167.png">\n<img src="images/image168.png">',
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      "Exception generated from IxCmd Illumina.Spark.EmbeddedCommandSet.ix_flowcell_door_open: An error has occurred while executing the command Oringinally caused by: An error has occurred while executing the command",
    Solution:
      "Flow Cell door not functioning; either the sensors not working/the folw cell dooe is having physical obstruction in the travel path (lead screw)\n\n1. task FSE, maybe need to replace the FPA",
    Image: "images/image169.png",
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      "Camera 5  disabled ( all lanes, all surface) because of camera sensor failure. Turning off the instrument is required to re-enable the camera. Press the power button on the front of the instrument to turn off the instrument. After 60 seconds , press the power buton again to tuen on the instrument.",
    Solution:
      "Various test need to be done to determine the root cause.\n\n1. task FSE, maybe need to repalce IM\n\n",
    Image: "images/image170.png",
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      "Camera 2 top surface: Through-focus peak did not exceed SNR threshold. SNR0.55 stddev 0.1 SNR threshold 5;;;;;; Originaaly caused by : Camera 1 top surface: Though-focus peak did not exceed SNR threshold. SNR 0.55 stddev 0.1 SNR threshold 5",
    Solution:
      "Failed Laser Calibration could be due to faulty Ubertarget.\nOr due to the misalignment between FCLM and IM causing the insstrument not able to aim the AF laser into the AF tile.\nLook at the saved images of the aF tile to look for skewed AF square in the image.\nIf the slew is too large, none fo the fiducials can be found . Here is an example of the Find Fiducial results\n\n1. task FSE, for this case, FCLM was the defective part, causing incorrect loading of the Ubertarget into the instrument. FCLM was replaced.",
    Image:
      '<img src="images/image171.png">\n<img src="images/image172.png">\n<img src="images/image173.png">',
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "LED measurement fail",
    Solution:
      "Ubertarget not loaded into the instrument before starting the NSS test\n\nIF an Ubertarget is confirmed to have been loaded, then it is a true LED failure in the IM\n\nCheck on the LED measurement results to find out which LED is faulty.\n\n1. FSE laod an Ubertarget into the instrument and restart\n2. Repalce IM, if it is confirmed that an Ubertarget ws loaded.",
    Image: "images/image174.png",
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      "Fluidics Automation Error 47: Operation up failed due to straw_z not being able to move to straw_down=0\n\nFluidics Automation Error 65: Operation up failed due to waste_door_open not being 0\n\n(47) Operation up failed due to straw_z being able to move to straw_down=0",
    Solution: "Defective BSM module\n\n1. task FSE, maybe need to replace BSM",
    Image: '<img src="images/image175.png">\n<img src="images/image176.png">',
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "Blue screen with error code 0X9C or 0X124",
    Solution: "SBC Hardware\n\n1. task FSE, maybe need to replace SBC board",
    Image: NaN,
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "DMA error 996",
    Solution: "FPGA on MPCA\n\n1. task FSE, maybe needt to replace MPCA",
    Image: NaN,
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "Pre run check failures requiring a power cycle",
    Solution:
      "1. Navigate to the Home Screen.\n2. Select Manage Instrument.\n3. Select Unload Consumable.\n4. Remove all Consumables.\n5. Perform a Power Cycle.\\*",
    Image: NaN,
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "Change a NextSeq 500/550 nickname",
    Solution:
      "1. Manage Instrumentne\n2. System customization\n3. Browse\n4. Nickname\n5. Save ",
    Image: NaN,
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "Fix inaccurate or inverted touch screen",
    Solution:
      "1. Windows start menu and open PenMount Control Panel\n2. Penmout 6000 USB\n3. Configure\n4. Calibration and select Standard Calibration\n5. Follow prompt\n6. Select OK and Confirm the screen is response as expected",
    Image: NaN,
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "Perform a NextSeq 500/550 system check",
    Solution:
      "1. Manage Instrumentne\n2. System Check\n*buffer tray with 150 ml of  DDwater",
    Image: NaN,
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "Optimal cluster density guidelines",
    Solution:
      "* High-Output and Mid-Output runs is 170-220 k/mm2  for well-balance.",
    Image: NaN,
    "Unnamed: 3": NaN,
  },
  {
    "Error message": '"Local Run Manager Error Row was updated or deleted"',
    Solution: "1. Power cycle\n* Communication error on the instrument\n",
    Image: NaN,
    "Unnamed: 3": NaN,
  },
  {
    "Error message": '"Lane Pump not initialized"',
    Solution:
      "1. Power cycle\n2. IF Initialize sucessfully andComplete a Quick Wash\n3. IF Wash complete without Errors, setup the next run\n4. IF Error persist after initialization, contact illumina",
    Image: "images/image200.png",
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      '"Not Found (ServiceStack.ServiceClient.Web.WebServiceException" error message',
    Solution:
      "1. Install antivirus software\n2. Don't reboot the instrument\n3. Manual  scans\n4. Set updates to download without user autherization, but no to install\n",
    Image: NaN,
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      "\"Access to the path 'C:\\NextSeqCalibration.cfg' is denied\"",
    Solution:
      "1. Contact lab's IT department\n2. Account setting change\n3. Comfirm credential",
    Image: NaN,
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      "\"Local Run Manager Error - Cannot update metrics during state 'PrimaryAnalysisCompleted'. Originally caused by: Conflict\"",
    Solution:
      "1. Confirm the LRM analysis has completed\n2. Power cycle\n3. IF the error persist, contact illumina",
    Image: "images/image201.png",
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      "Cycle 1 Error, Camera Disabled, Failed to Detect Clusters",
    Solution:
      "1. IF the run stop at Cycle 1 and lane 1/3 show low cluster density (no focus image on lane2/4), Clustering fail issue.\n2. Power cycle\n3. System check\n4. Found \\images\\Focsu\\L00X\\C1.1\n",
    Image: '<img src="images/image202.png">\n<img src="images/image203.png">',
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      "“Local Run Manager: Originally caused by an internal server error”",
    Solution:
      "1. Power cycle, NCS initialize without Errors, continue the next run\n2. IF the notification persist after NCS open, restart the PostgreSQL\n3. Close NCS \n4. Search the servcie app and run as Administrator\n5. Check the PostgreSQL is Running. IF not , right click to start.\n6. Relaunch the NCS",
    Image: NaN,
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      "“A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond 192.168.113.2.5555Error code is “10060”",
    Solution: "* Ineternet connection issue",
    Image: "images/image204.png",
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      "\"'Local Run Manager Error - Unable to setup impersonation with credential for \\sbsuser' Originally caused by: bad request\"",
    Solution:
      "Account credential issue\n1. Power Cycle\n2. IF prompt sign in, update credential for sbsuser\n* CMD type 'net user sdsadmin', the date will expense\n* Log Out, Switch User ,get into admin to update the user credential\n* Log in LRM\n3. Run NCS without any Errors\n4. IF the Error is persist, contact the illumina",
    Image: NaN,
    "Unnamed: 3": NaN,
  },
  {
    "Error message": '"Object reference not set to an instance of an object"',
    Solution:
      "* During runsetup or post run wash\n1. Power Cycle\n2. Proceed the steps\n* During the run \n1. Confirm the run performance wasn't affected\n2. Power Cycle \n* The run was affected or stop \n1. contact the illumina",
    Image: "images/image205.png",
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "Troubleshooting Possible Stale Image Data Detected",
    Solution:
      "* It is usually reflected in poor sequencing metrics, such as overclusting, low density, or a steep intensity/Q30 \n1. Evaluate run performance\n2. Complete automatic post-run wash\n3. Perform system check\n4. share result with illumina",
    Image: NaN,
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "Unloading Reagents Catridge",
    Solution:
      "* NCS isn't frozen\n1. Main Menu\n2. Manage Instrument\n3. Unload Consumable\n4. IF persist Error, restart NCS\n5. IF persist Error, Power Cylce\n6. IF still persist Error, contact the illumina\n",
    Image: NaN,
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      "**Error message:**RFID tag appears to be blank: signed data layout version = 0",
    Solution:
      "1. Re-seat/reinsert consumable\n2. Power Cycle\n3. IF the issue persist, try a new consumable\n* IF resovled, contact the illumina to request a replacement\n4. IF step 1-3 do not resovle the issue, RFID sensor issue",
    Image: '<img src="images/image206.png">\n<img src="images/image207.png">',
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      '"The following required software is either not installed or not running. Sequencing cannot be performed until this problem is fixed. Contact Technical Support. Universal Copy Service."',
    Solution:
      "1. Power Cycle\n2. update the credential\n3. Task manager stop the UCS of sesrvice\n4. Find UCS folder\n* C:\\ProgramData\\illumina\\UCS\\Runs\n5. Create the new folder 'ArchivedRuns' and put the old tile into new folder\n6. Start the UCS \n7. IF persist Error, contact the illumina\n",
    Image: "images/image208.png",
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      "Error in Fluidics.FlowCellFluidics1.LanePump.IxPassThroughRheodyneValve1: Reinit while recovering from error””. Originally caused by” Timeout waiting 60000ms within EventToBclockingConverter.WaitForData().\n",
    Solution:
      "1. Power Cycle\n2. Run the 'Valve Response Test' of System Check\n3. Quick wash\n* IF no Error, cleared for use\n* IF persist Error, contact the illumina ",
    Image: "images/image209.png",
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "ThermoCouple_Side TemperatureProbe not operating",
    Solution:
      "1. Power cycle\n* Communication issue or Sensor issue\n2. IF persist Error, contact illumina\n",
    Image: NaN,
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "Wash State Unknown in NextSeq ",
    Solution:
      "* This Error is specific to NCS v4.0.0 and was fixed in NCS v4.0.1",
    Image: "images/image210.png",
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      'Error in Fluidics.FlowCellFluidics1.LanePump.IXPassThroughCavroSyringePump2. Auto syringe overload recovery for dispense is not enabled."',
    Solution:
      "* communication issue in the instrument while sqenecing\n1. Upon run completion, Power Cycle and Verify the innitialization\n2. Verify the function of the fluidics system in System Check\n3. Manual Post-Run wash before setting up the next run\n*IF step 1~3 fail, contact illumina\n",
    Image: NaN,
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      '"All cameras disabled Originally caused by: Failed Camera Board."',
    Solution:
      "* Transient communication issue\n* A loose connection from camera board\n* A hardware failure at MPCA\n1. Power cycle\n2. IF the system innitilization without Error, run Flow Cell Registration Test\n* Pass, Perform the next run； Fail, contact illumina",
    Image: NaN,
    "Unnamed: 3": NaN,
  },
  {
    "Error message": '"@@@---Failed to get temperature."',
    Solution:
      "1. IF run is normal, Power Cycle the instrument without Error and continue the next run\n2. IF run is affected, Power Cycle and perform System Check Test. IF all tests pass, then proceed the next run\n3. IF persist the Error or System Check Test fail, contact illumina",
    Image: "images/image211.png",
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      '"Exception generated from IxCmdIllumina.Spark.EmbeddedCommandSet.ix_dlowcell_door_open : An error has occurred while executing command Originally caused by: An error has occurred while executing the command"',
    Solution:
      "1. Power Cycle\n2. IF instrument initilization without Errors, the door can be tested\n* Manage Instrumentn and unload consummables\n3. IF no Error, continue to use\n* IF persist Errors, contact illumina",
    Image: "images/image212.png",
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      '"Flow Cell Registration Failed (skew). No action necessary"',
    Solution:
      "* Occur during pre-run checks and is caused by a software communication issue and generally does not impact run performance\n1. Monitor run until completion and review the run specifications\n* IF run does not meet specifications, contact illumina\n2. Power Cycle",
    Image: "images/image213.png",
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      "existing connection was forcibly closed by a remote host error",
    Solution:
      "* The Error usully happen when communication between SBC and MPCA\n* Check the output folder is set to save locally instead of external location\n* Check time of device\n* Check if any gateway value have been changed\n* Check the group policy object report\n* Check the Antivirus\n* Power Cycle\n* Check NCS logs",
    Image: NaN,
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      '"An error occurred while sequencing. Will now proceed to determining whether to perform a post-run wash. Originally caused by: Error in Fluidics. FlowCellFluidics1.LanePump.IXPassThroughCavroSyringePump2. Auto syringe overload recovery for dispense is not enabled."',
    Solution: "* Contact illumina\n* Replace the syringe",
    Image: NaN,
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      '"The RAID hard drive system has indicated a possible problem. Please contact Illumina Technical Support at 1-800-809-ILMN (+1-858-202-ILMN)."',
    Solution:
      "1. open the 'Intel Rapid Storage Technology enterprise'\n* IF all SATA disks green mark. Clearing the RAID notification\n* Check the disks status may be shown as 'Failed' or 'At Risk'\n2. Select 'Mark as normal' and allow the instrument to repair the RAID1 configuration. It take roughly 4 hours\n3. IF the RAID warning has cleared after NCS initialization, then the issue has been resolved and ready for seqeuncing\n* IF persist Error, contact illumina",
    Image: "images/image214.png",
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      '"Remote server returned an error: (426) Connection closed; transfer aborted"',
    Solution:
      "* occur at the start or during a run but not cause the run stop\n* Caused by temporary interruption in the network\n* IF the run has not stopped, check all file are transffered successfully to the output location\n* IF File were not transffered successfully, contact illumina",
    Image: "images/image215.png",
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      "Software shutdown issue(s): Data from the previous sequencing run is being sent to persistent storage. Select Cancel to wait for the transfer to finish. Do you want to proceed?",
    Solution:
      "* About Proactive enabled issue\n1. IF the instrument not connected to the internet, disable Proactive monitor\n* NCS, System Setting, Deselect the option 'Send Instrument Performance Data to Illumina'\n* IF the most recently run is still being transffered and/or uploaded, it is acceptable to select Proceed and ignore the message",
    Image: "images/image216.png",
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "Specific Camera Disabled Failed to Detect Clusters error",
    Solution:
      "* Unable to defect cluster at Cycle1\n1. Evaluate the run performance\n* Compare the cluster density of other lanes (170-220k/mm2)\n* Poor performance for sample\n2. IF run performance meets specification, a communicate issue\n* Power Cycle\n3. IF persistently occurs, contact illumina",
    Image: "images/image217.png",
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "buffer cartridge/tray stuck",
    Solution:
      "1. View the position of BSM sipper, if down restart the NCS\n2. IF still down after restart NCS, Power Cycle\n3. Once the sippers riase, apply a little force to attempt to move the tray out\n4. IF persist stuck in the tray, contact illumina",
    Image: NaN,
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "flow cell registration stall during pre check",
    Solution:
      "* Pre-run check take around 30 minute\n* communiaction issue\n* Reseat the Flow Cell and Power Cycle",
    Image: NaN,
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      '"AsyncFirmwareOperationCommand timed out waiting for started after XX:XX:XX." "While waiting on an asynchronous firmware operation: camera bitmask 111111 Originally caused by: Failed XY Stage."',
    Solution:
      "* Transient commnication issue\n1. IF the run is continuing, allow the run to complete\n2. After the run complete , review the performance\n3. Power Cycle\n4. IF the system initializes without Error, continue to next run\n5. IF persist Error, contact illumina",
    Image: "images/image218.png",
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      '"The internal temperature of the instrument was out of range for more than one cumulative hour during the sequencing run. Review the quality metrics for the run. Refer to the user guide for more information..."',
    Solution:
      "* Transient commnunication issue or a hardware related issue\n1. Allow the run to complete\n2. Post-run wash after the run completion\n3. Power Cycle\n4. Complete a System Check\n5. Contact illumina",
    Image: "images/image219.png",
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "empty output folder",
    Solution:
      "* NCS system setup not properly, seqeuncing data file only transffer to temp folder, but no data available in the output folder\n* No Error dispplay \n1. floder depth\n//[server]/folder1/\n//[server]/folder1/folder2\nD:[folder1][folder2]\n2. send instrument performance data to  illumina\n3. IF still not transffered, contact illumina",
    Image: NaN,
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      '"While loading Instrument Maintenance State File "C:ProgramData\\Illumina\\NextSeq\\InstrumentMaintenanceState.xml" Originally caused by: The string".',
    Solution:
      "* Failing to initialize and power cycling does not resolve the issue\n1. Open and review the InstrumentMaintananceState.xml\n* C:\\ProgramData\\illumina\\NextSeq\n2. Confirm date and time\n3. IF the file appears blank or issue persist, contact illumina",
    Image: "images/image220.png",
    "Unnamed: 3": NaN,
  },
  {
    "Error message": " imaging system failed pre run check error",
    Solution:
      "* Flow Cell issue or communicatioin issue\n1. Resat and check the Flow Cell\n2. IF pre-run check fail, Power Cycle\n3. IF persist Error, try a different flow cell\n4. IF run is able to be started with a differenct Flow Cell\n5. Contact illumina",
    Image: "images/image221.png",
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      "\"Failed to communicate with firmware via FTP at 'XXX.XX.XXX.X'. This may be caused by incorrect Proxy Settings. If the instrument is using Proxy Servers for LAN, ensure the IP Address...\"",
    Solution:
      '1. Control panel > Internet Options > Connections Tabs > LAN settings\n2. IF "Use a proxy server…" is checked, selected Advanced\n3. Enter IP address\n* 192.168.113.3\n* IF in doubt, contact illumina\n4. Select OK\n5. Restart the NCS',
    Image: "images/image222.png",
    "Unnamed: 3": NaN,
  },
  {
    "Error message": " blank BaseSpace login screen during run setup",
    Solution:
      "* Time is incorrect\n* Ports are being block\n* UCS is not running\n1. Update the time\n2. Save and Resave the hosting location\n*Manage Instrument > System Configuration > BSSH\n3. Regenerate LRM\n* Browse > https://localhost > tool >System Setting > Certificate\n4. Comfirm all port about BSSH\n5. Comfirm UCS is running\n6. IF persist Error, comtact illumina",
    Image: NaN,
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "flow cell registration failed to find fiducial",
    Solution:
      "* The fiducial measures a baseline X and Y between each of the cameras relative to camera 2\n1. Allow run to start \n2. After run completes, confirm run performance,\n3. Power Cycle\n4. If the system initializes without Error, continue ton next run",
    Image: "images/image223.png",
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      "fluidics automation error\n1: Operation home failed due to flowcell_z not being able to move to flowcell_z_home=1\n\n2: Operation home failed due to flowcell_z not being able to move to flowcell_z_home=0\n\n3: Failed to move flowcell_z to down\n\n6: Move flow cell to out failed due to flow cell home not being 0\n\n7: Failed to move flowcell_x (FlowCell Loading Mechanism)\n\n12: Failed to move flowcell_align to out\n\n20: Failed to move sipper_y to pick\n\n22: Move reagent z to down failed due to reagent tray up not being 0\n\n24: Operation home failed due to reagent_z not being able to move to reagent_tray_down=1\n\n25: Operation home failed due to reagent_z not being able to move to reagent_tray_down=0 (System.ApplicationException)\n\n26: Operation home failed due to reagent_z not being able to move to reagent_tray_down=0\n\n30: Sensor align flow not aligned to 1\n\n34: Operation home failed due to flowcell y not being able to move to flowcell_y_home=1\n\n35: Sipper_Y not being able to move\n\n36: Operation home failed due to sipper_y not being able to move to sipper_y_home=1 - fluidics\n\n39: Cannot perform pierce. Machine state is unk and is expected to be loaded. The mechanisms have been automatically reinitialized in order to return to a working state\n\n41: Cannot perform unload. Machine state is unk\n\n47: Operation up failed due to straw_z not being able to move to straws_down=0\n\n50: Operation up failed due to straw_z not being able to move to straws_up =1\n\n51: Operation up failed due to straw_z not being able to move to straws down = 0\n\n52: Operation down failed to waste presence not being 1\n\n54: Operation down failed due to straw_z not being able to move to straws_down=1.\n\n55: Operation up failed due to straw_z not being able to move to straws_down=0\n\n58: Related to not loading tray\n\n65: Sensor reagent_door_open should be 0, but it is not\n\n66: Sipper_y stopped due to safety_interlock\n\n67: Reagent_z stopped due to safety_interlock\n\n69: Operation init failed due to flowcell_align1 not being 1 (or 0)\n\nissues unloading reagents",
    Solution:
      "* Communication issue \n* Spent reagent is not fully\n* A hardware component issue\n1. Reinsert the spent reagent\n2. Power Cycle\n* Fail to initialize, contact illumina\n3. Perform a Quick Wash\n4. IF wash complete, proceed the next run, but for contact illumnia\n",
    Image: "images/image224.png",
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "issues unloading reagents",
    Solution:
      "* Communication issue\n1. IF the computer is not frozen\n2. Main Menu\n3. Manage Instrument\n4. Unload Consumables\n5. IF unable to unload, Power Cycle\n6. IF the issue persist, contact illumina",
    Image: NaN,
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "mid run Camera Disabled error",
    Solution: "* FPGA issue, resolve in NCS v4.0 ",
    Image: NaN,
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "no output folder created when set in the Local drive",
    Solution:
      "* LRM issue\n* Change the Output location\n* IF persist Error, contact illumina",
    Image: NaN,
    "Unnamed: 3": NaN,
  },
  {
    "Error message":
      "pre run checks with Temperature sensor check failed: Board 0/1 ",
    Solution:
      "* Communication error\n1. Power Cycle\n2. Repeat the run setup\n3. IF persist Error, contact illumina",
    Image: "images/image225.png",
    "Unnamed: 3": NaN,
  },
  {
    "Error message": " presence of snr.csv Files in Temp folder",
    Solution: "* About debugging file, deleted automatically",
    Image: NaN,
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "spent reagent cartridge is full",
    Solution:
      "1. Empty the waste \n2. IF persist Error, clean the waste container sensor\n3. Check the cartridge itself\n* Empty, 70% enthanol solution clean\n4. Try another spent reagent\n5. After run, Power Cycle\n6. IF persist Error, contact illumina",
    Image: '<img src="images/image226.png">\n<img src="images/image227.png">',
    "Unnamed: 3": NaN,
  },
  {
    "Error message": "spent reagent cartridge not detected ",
    Solution: "1. Power Cycle\n2. IF persist Error, contact illumina ",
    Image: NaN,
    "Unnamed: 3": NaN,
  },
];
