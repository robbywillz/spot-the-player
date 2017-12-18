'Spot The Player' is the micro service based on docker image which exposes RESTful web service to get player details.

This service depend on mongo DB which also to be deployed and running on same Kubernetes cluster.

Running docker image in local environment using minikube - https://kubernetes.io/docs/getting-started-guides/minikube/

- Start minikube
	$ minikube.exe start
	
- Start kubernetes dashboard
	$ minikube.exe dashboard

- Run mongo DB as 'player-mongo' 
	$ kubectl.exe run player-mongo --image=mongo --port=27017

- Expose eternal IP to access DB outside kubernetes cluster
	$ kubectl expose deployment player-mongo --type=NodePort
	
- Run 'Spot The Player' RESTful web service
	$ kubectl.exe run spot-player-rest --image=robbywillz/testrepo:spot-player-rest --port=3000
	
- Auto scale 'Spot The Player' RESTful web service based on cpu load
	$ kubectl  autoscale deployment spot-player-rest --min=2 --max=4 --cpu-percent=60